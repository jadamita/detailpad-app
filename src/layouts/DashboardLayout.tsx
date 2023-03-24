/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {
  AppShell,
  Box,
  Burger,
  Footer,
  Group,
  Header,
  MantineTheme,
  MediaQuery,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { PropsWithChildren, useState } from "react";
import { LayoutErrorBoundary } from "~/components/util/LayoutErrorBoundary";
import NavigationBar from "~/components/NavigationBar";
import UserMenu from "~/components/UserMenu";

export default function DashboardLayout({ children }: PropsWithChildren) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AppShell
        padding={"md"}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        styles={(theme: MantineTheme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
        navbar={<NavigationBar opened={opened} setOpened={setOpened} />}
        header={
          <Header height={70} p="md">
            <Group position="apart" noWrap={true}>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  style={{ justifyContent: "start" }}
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Title>DetailPad</Title>
              </MediaQuery>
              <UserMenu />
            </Group>
          </Header>
        }
        footer={
          <Footer height={60} p="md">
            Detailpad Footer
          </Footer>
        }
      >
        {/* <Box px="md"> */}
        <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
        {/* </Box> */}
      </AppShell>
    </>
  );
}
