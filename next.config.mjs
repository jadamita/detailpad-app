import { withAxiom } from "next-axiom";
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = withAxiom({
  images: {
    domains: [
      "dpdev.ca858bec81d1bc99aa2d04d31afb614a.r2.cloudflarestorage.com",
      "ca858bec81d1bc99aa2d04d31afb614a.r2.cloudflarestorage.com",
      "pub-ff79583998ac49eb854590599b5e33c7.r2.dev",
    ],
  },
  reactStrictMode: true,

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
export default config;
