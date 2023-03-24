/* eslint-disable @typescript-eslint/no-floating-promises */

import { Group, Navbar, ThemeIcon, UnstyledButton, Text } from "@mantine/core";
import { IconDashboard, IconUsers, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { SetStateAction } from "react";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
  setOpened: React.Dispatch<SetStateAction<boolean>>;
}

const data = [
  {
    icon: <IconDashboard size="1rem" />,
    color: "blue",
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <IconUsers size="1rem" />,
    color: "grape",
    label: "Team",
    path: "/team",
  },
  {
    icon: <IconUser size="1rem" />,
    color: "green",
    label: "Account",
    path: "/account",
  },
];

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

export default function NavigationBar({
  opened,
  setOpened,
}: INavigationBarProps) {
  const links = data.map((link) => (
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
