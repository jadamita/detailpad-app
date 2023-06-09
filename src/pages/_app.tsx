/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/app";
import { type Session } from "next-auth";

import { api } from "~/utils/api";
import { RouterTransition } from "~/components/util/RouterTransition";
import { useEffect, useState } from "react";
import { AppPropsWithLayout } from "~/components/util/LayoutTypes";
import { Router } from "next/router";
import { LoaderPage } from "~/components/util/Loader";
import { Notifications } from "@mantine/notifications";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

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
        <Notifications />
        <NavigationProgress />
        <SessionProvider session={session}>
          <RouterTransition />
          {getLayout(loading ? <LoaderPage /> : <Component {...pageProps} />)}
          {process.env.NODE_ENV == "production" ? <Analytics /> : <></>}
        </SessionProvider>
      </MantineProvider>
    </>
  );
};

export { reportWebVitals } from "next-axiom";
export default api.withTRPC(MyApp);
