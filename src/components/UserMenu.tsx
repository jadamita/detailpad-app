import { Menu, ActionIcon, Avatar, Text } from "@mantine/core";
import {
  IconSettings,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconArrowsLeftRight,
  IconDoor,
} from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";

export default function UserMenu() {
  const { data: session } = useSession();
  return (
    <Menu shadow="md" width={200} withArrow>
      <Menu.Target>
        <ActionIcon variant="hover" radius="xl" size={40}>
          <Avatar
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL as string}/avatars/${
              session?.user.avatar != null
                ? session?.user.avatar
                : "default_ava.jpg"
            }`}
            radius="xl"
          />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
        <Menu.Item
          icon={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          icon={<IconDoor size={14} />}
          onClick={() => signOut()}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
