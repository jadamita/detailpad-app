"use strict";
exports.id = 550;
exports.ids = [550];
exports.modules = {

/***/ 7550:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ authOptions),
/* harmony export */   "W": () => (/* binding */ getServerAuthSession)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2104);
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5495);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _upstash_ratelimit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1246);
/* harmony import */ var _upstash_ratelimit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_upstash_ratelimit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1721);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3127);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_db__WEBPACK_IMPORTED_MODULE_3__, _upstash_redis__WEBPACK_IMPORTED_MODULE_6__]);
([_server_db__WEBPACK_IMPORTED_MODULE_3__, _upstash_redis__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





 // for deno: see above


// Create a new ratelimiter, that allows 5 requests per 1 minute
const ratelimit = new _upstash_ratelimit__WEBPACK_IMPORTED_MODULE_5__.Ratelimit({
    redis: _upstash_redis__WEBPACK_IMPORTED_MODULE_6__.Redis.fromEnv(),
    limiter: _upstash_ratelimit__WEBPACK_IMPORTED_MODULE_5__.Ratelimit.slidingWindow(5, "1 m"),
    analytics: true
});
/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */ const authOptions = {
    pages: {
        signIn: "/login"
    },
    secret: "1105",
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    callbacks: {
        session ({ session , token  }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.role = token.role;
                session.user.org = token.org;
                session.user.avatar = token.avatar;
            }
            return session;
        },
        // eslint-disable-next-line @typescript-eslint/require-await
        async jwt ({ token , user , trigger  }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.org = user.org;
                token.avatar = user.avatar;
            }
            if (trigger == "update") {
                const user = await _server_db__WEBPACK_IMPORTED_MODULE_3__/* .prisma.user.findUnique */ ._.user.findUnique({
                    where: {
                        id: token.id
                    },
                    select: {
                        avatar: true
                    }
                });
                if (user?.avatar) {
                    token.avatar = user?.avatar;
                }
            }
            return token;
        }
    },
    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_server_db__WEBPACK_IMPORTED_MODULE_3__/* .prisma */ ._),
    debug: "production" == "development",
    providers: [
        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (credentials != null) {
                    if (true) {
                        const { success  } = await ratelimit.limit(credentials.username);
                        if (!success) {
                            (0,_utils_logger__WEBPACK_IMPORTED_MODULE_7__/* .logDebug */ .o)("too-many-login-attempts", {
                                username: credentials?.username
                            });
                            return null;
                        }
                    }
                    const user = await _server_db__WEBPACK_IMPORTED_MODULE_3__/* .prisma.user.findFirst */ ._.user.findFirst({
                        where: {
                            email: credentials?.username
                        },
                        include: {
                            company: true
                        }
                    });
                    if (user) {
                        const hashCompare = await bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compare(credentials.password, user.passwordHash);
                        if (hashCompare) {
                            const retUser = {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                role: user.role,
                                org: user.company?.id || -1,
                                avatar: user.avatar || "default_ava.jpg"
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
            }
        })
    ]
};
/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */ const getServerAuthSession = (ctx)=>{
    return (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(ctx.req, ctx.res, authOptions);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5495:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ prisma)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6205);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_1__]);
_env_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({
    log: _env_mjs__WEBPACK_IMPORTED_MODULE_1__/* .env.NODE_ENV */ .O.NODE_ENV === "development" ? [
        "query",
        "error",
        "warn"
    ] : [
        "error"
    ]
});
if (_env_mjs__WEBPACK_IMPORTED_MODULE_1__/* .env.NODE_ENV */ .O.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ logDebug)
/* harmony export */ });
/* harmony import */ var next_axiom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2930);
/* harmony import */ var next_axiom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_axiom__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable @typescript-eslint/no-explicit-any */ 
const logDebug = (message, args)=>{
    if (false) {} else {
        next_axiom__WEBPACK_IMPORTED_MODULE_0__.log.debug(message, args);
    }
};


/***/ }),

/***/ 6205:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ env)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 * Specify your server-side environment variables schema here. This way you can ensure the app isn't
 * built with invalid env vars.
 */ const server = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url(),
    NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_0__.z["enum"]([
        "development",
        "test",
        "production"
    ]),
    NEXTAUTH_SECRET:  true ? zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1) : 0,
    NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_0__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth.js automatically uses the VERCEL_URL if present.
    (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(1) : zod__WEBPACK_IMPORTED_MODULE_0__.z.string().url())
});
/**
 * Specify your client-side environment variables schema here. This way you can ensure the app isn't
 * built with invalid env vars. To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */ const client = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
});
/**
 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
 * middlewares) or client-side so we need to destruct manually.
 *
 * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}
 */ const processEnv = {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: "production",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL
};
// Don't touch the part below
// --------------------------
const merged = server.merge(client);
/** @typedef {z.input<typeof merged>} MergedInput */ /** @typedef {z.infer<typeof merged>} MergedOutput */ /** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */ let env = /** @type {MergedOutput} */ process.env;
if (!!process.env.SKIP_ENV_VALIDATION == false) {
    const isServer = "undefined" === "undefined";
    const parsed = /** @type {MergedSafeParseReturn} */ isServer ? merged.safeParse(processEnv) // on server we can validate all env vars
     : client.safeParse(processEnv) // on client we can only validate the ones that are exposed
    ;
    if (parsed.success === false) {
        console.error("❌ Invalid environment variables:", parsed.error.flatten().fieldErrors);
        throw new Error("Invalid environment variables");
    }
    env = new Proxy(parsed.data, {
        get (target, prop) {
            if (typeof prop !== "string") return undefined;
            // Throw a descriptive error if a server-side env var is accessed on the client
            // Otherwise it would just be returning `undefined` and be annoying to debug
            if (!isServer && !prop.startsWith("NEXT_PUBLIC_")) throw new Error( true ? "❌ Attempted to access a server-side environment variable on the client" : 0);
            return target[/** @type {keyof typeof target} */ prop];
        }
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;