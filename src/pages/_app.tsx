import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { type Session } from "next-auth";

import { api } from "~/utils/api";
import { RouterTransition } from "~/components/RouterTransition";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>DetailPad</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <NavigationProgress />
        <SessionProvider session={session}>
          <RouterTransition />
          <Component {...pageProps} />
        </SessionProvider>
      </MantineProvider>
    </>
  );
};

export { reportWebVitals } from "next-axiom";
export default api.withTRPC(MyApp);
// import { type AppType } from "next/app";
// import { type Session } from "next-auth";

// import { api } from "~/utils/api";

// import "~/styles/globals.css";

// const MyApp: AppType<{ session: Session | null }> = ({
//   Component,
//   pageProps: { session, ...pageProps },
// }) => {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// };

// export default api.withTRPC(MyApp);
