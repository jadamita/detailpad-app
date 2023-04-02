/* eslint-disable @typescript-eslint/no-floating-promises */

import { Group, Navbar, ThemeIcon, UnstyledButton, Text } from "@mantine/core";
import { UserRole } from "@prisma/client";
import { IconDashboard, IconUsers, IconUser } from "@tabler/icons-react";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { SetStateAction } from "react";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
  setOpened: React.Dispatch<SetStateAction<boolean>>;
}

export interface INavMenuItem {
  icon: JSX.Element;
  color: string;
  label: string;
  path: string;
  sortOrder: number;
}

const MainLink = ({ icon, color, label, path, setOpened }: MainLinkProps) => {
  const router = useRouter();
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        backgroundColor:
          path == router.pathname
            ? theme.colorScheme === "dark"
              ? theme.colors.dark
              : theme.colors.blue[1]
            : theme.colors.white,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[2],
        },
      })}
      onClick={() => {
        router.push(path);
        setOpened(false);
      }}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

interface INavigationBarProps {
  opened: boolean;
  setOpened: React.Dispatch<SetStateAction<boolean>>;
}

const getMenuitems = (user: User) => {
  const menuItems: INavMenuItem[] = [
    {
      icon: <IconDashboard size="1rem" />,
      color: "blue",
      label: "Dashboard",
      path: "/",
      sortOrder: 0,
    },
    {
      icon: <IconUser size="1rem" />,
      color: "green",
      label: "Account",
      path: "/account",
      sortOrder: 3,
    },
  ];

  // add manager only menu items
  if (user.role == UserRole.MANAGER) {
    menuItems.push({
      icon: <IconUsers size="1rem" />,
      color: "grape",
      label: "Team",
      path: "/team",
      sortOrder: 2,
    });
  }

  return menuItems.sort((a, b) => (a.sortOrder > b.sortOrder ? 1 : -1));
};

export default function NavigationBar({
  opened,
  setOpened,
}: INavigationBarProps) {
  const session = useSession();

  if (session.status != "authenticated") {
    return (
      <Navbar
        p="md"
        hiddenBreakpoint="sm"
        hidden={!opened}
        width={{ sm: 200, lg: 300 }}
      >
        <Navbar.Section grow mt="md">
          <div>Loading...</div>
        </Navbar.Section>
      </Navbar>
    );
  }

  const links = getMenuitems(session.data.user).map((link) => (
    <MainLink {...link} key={link.label} setOpened={setOpened} />
  ));

  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section grow mt="md">
        <div>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
