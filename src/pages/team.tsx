import { NextPageContext } from "next";
import Head from "next/head";
import {
  Avatar,
  Badge,
  Group,
  Paper,
  ScrollArea,
  Select,
  Table,
  Text,
} from "@mantine/core";
import { getSession } from "next-auth/react";
import DashboardLayout from "~/layouts/DashboardLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "~/components/util/LayoutTypes";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

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

const data = [
  {
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
    role: "Manager",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
    role: "Manager",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
    role: "Manager",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
    role: "Manager",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
    role: "Manager",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
    role: "Manager",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Robert Wolfkisser",
    job: "Engineer",
    email: "rob_wolf@gmail.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jill Jailbreaker",
    job: "Engineer",
    email: "jj@breaker.com",
    role: "Collaborator",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Henry Silkeater",
    job: "Designer",
    email: "henry@silkeater.io",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Bill Horsefighter",
    job: "Designer",
    email: "bhorsefighter@gmail.com",
    role: "Contractor",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Jeremy Footviewer",
    job: "Manager",
    email: "jeremy@foot.dev",
    role: "Manager",
  },
];

const rolesData = ["Manager", "Collaborator", "Contractor"];

const Team: NextPageWithLayout = () => {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
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
        <Select data={rolesData} defaultValue={item.role} variant="unstyled" />
      </td>
      <td>{Math.floor(Math.random() * 6 + 5)} days ago</td>
      <td>
        {Math.random() > 0.5 ? (
          <Badge fullWidth>Active</Badge>
        ) : (
          <Badge color="gray" fullWidth>
            Disabled
          </Badge>
        )}
      </td>
    </tr>
  ));

  return (
    <>
      <Head>
        <title>DetailPad - Team</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Text
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily || ""}`,
            fontWeight: 500,
            fontSize: 24,
          })}
        >
          Team
        </Text>
        <br />
        <Paper withBorder shadow="md" p={20} radius="md">
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
