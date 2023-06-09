import { NextPageContext } from "next";
import Head from "next/head";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Group,
  Paper,
  ScrollArea,
  Table,
  Text,
} from "@mantine/core";
import { getSession } from "next-auth/react";
import DashboardLayout from "~/layouts/DashboardLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "~/components/util/LayoutTypes";
import { useDisclosure } from "@mantine/hooks";
import AddUserModal from "~/components/team/AddUserModal";
import { api } from "~/utils/api";
import { UserRole, UserStatus } from "@prisma/client";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session?.user.role == UserRole.EMPLOYEE) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

const Team: NextPageWithLayout = () => {
  const { data } = api.user.getUsers.useQuery();

  const getStatusBadge = (status: UserStatus) => {
    switch (status) {
      case UserStatus.ACTIVATED:
        return <Badge>Activated</Badge>;
      case UserStatus.CLOSED:
        return <Badge>Closed</Badge>;
      case UserStatus.DELETED:
        return <Badge>Deleted</Badge>;
      case UserStatus.DISABLED:
        return <Badge>Disabled</Badge>;
      case UserStatus.PENDING_VERIFICATION:
        return <Badge>Pending Verification</Badge>;
      case UserStatus.PENDING_ACTIVATION:
        return <Badge>Pending Activation</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const rows = data?.map((item) => (
    <tr key={item.id}>
      <td>
        <Group spacing="sm">
          <Avatar
            size={70}
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL as string}/avatars/${
              item.avatar != null ? item.avatar : "default_ava.jpg"
            }`}
            radius={40}
          />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        {/* <Select
          data={["Manager", "Employee"]}
          defaultValue={item.role}
          variant="unstyled"
        /> */}
        {item.role}
      </td>
      <td>{Math.floor(Math.random() * 6 + 5)} days ago</td>
      <td>
        {getStatusBadge(item.status)}
        {/* {Math.random() > 0.5 ? (
          <Badge fullWidth>Active</Badge>
        ) : (
          <Badge color="gray" fullWidth>
            Disabled
          </Badge>
        )} */}
      </td>
    </tr>
  ));

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <AddUserModal isOpen={opened} closeModal={close} />
      <Head>
        <title>DetailPad - Team</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Paper withBorder shadow="md" p={20} radius="md">
          <Text
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily || ""}`,
              fontWeight: 500,
              fontSize: 24,
            })}
          >
            Team
          </Text>
          <Divider my="sm" pb={5} />
          <Button onClick={open}>Add Employee</Button>
          <ScrollArea>
            <Table miw={800} verticalSpacing="sm">
              <thead>
                <tr>
                  <th>Team Member</th>
                  <th>Role</th>
                  <th>Last Active</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </ScrollArea>
        </Paper>
      </div>
    </>
  );
};

Team.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Team;
