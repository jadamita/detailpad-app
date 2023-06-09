import { NextPageContext } from "next";
import Head from "next/head";
import { getSession } from "next-auth/react";
import DashboardLayout from "~/layouts/DashboardLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "~/components/util/LayoutTypes";
import { Grid } from "@mantine/core";

import { AvatarEdit } from "~/components/account/AvatarEdit";
import { ProfileEdit } from "~/components/account/ProfileEdit";

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

const Account: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>DetailPad - Account</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Grid>
          <Grid.Col xl={3} lg={6} md={6} sm={12} xs={12}>
            <AvatarEdit />
          </Grid.Col>
          <Grid.Col xl={5} lg={6} md={6} sm={12} xs={12}>
            <ProfileEdit />
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

Account.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Account;
