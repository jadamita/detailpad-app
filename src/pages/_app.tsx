import Head from "next/head";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { NavigationProgress } from "@mantine/nprogress";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { type Session } from "next-auth";

import { api } from "~/utils/api";
import { RouterTransition } from "~/components/RouterTransition";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <>
      <Head>
        <title>DetailPad</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
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
      </ColorSchemeProvider>
    </>
  );
};

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
