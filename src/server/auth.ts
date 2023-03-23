import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
  RequestInternal,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "~/server/db";
import { UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import { User } from "next-auth/core/types";
import { Ratelimit } from "@upstash/ratelimit"; // for deno: see above
import { Redis } from "@upstash/redis";
import { log } from "next-axiom";

// Create a new ratelimiter, that allows 5 requests per 1 minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 m"),
  analytics: true,
});

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: number;
      // ...other properties
      role: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    // ...other properties
    id: number;
    role: UserRole;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  secret: "1105",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days, should this be a env var?
  },
  callbacks: {
    // / session({ session, user }) {
    session({ session }) {
      if (session.user) {
        // session.user.id = user.id;
        // session.user.role = user.role;
        // session.user.role = user.role; <-- put other properties on the session here
      }
      return session;
    },
    // async jwt({ token, user, account, profile, isNewUser }) {
    // eslint-disable-next-line @typescript-eslint/require-await
    async jwt({ token }) {
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  debug: process.env.NODE_ENV == "development",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"username" | "password", string> | undefined
      ): Promise<User | null> {
        if (credentials != null) {
          const { success } = await ratelimit.limit(credentials.username);

          if (!success) {
            log.debug("too-many-login-attempts", {
              username: credentials?.username,
            });
            return null;
          }

          const user = await prisma.user.findFirst({
            where: {
              email: credentials?.username,
            },
          });

          if (user) {
            const hashCompare = await bcrypt.compare(
              credentials.password,
              user.passwordHash
            );

            if (hashCompare) {
              const retUser: User = {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
              };
              return retUser;
            } else {
              return null;
            }
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
