import { Paper } from "@mantine/core";
import { NextPageContext } from "next";
import Head from "next/head";

interface IReviewsProps {
  subdomain: string;
}

export function getServerSideProps(context: NextPageContext) {
  const { req } = context;

  const subDomain = req?.headers.host?.split(".")[0];

  console.log("hit");

  return {
    props: {
      subdomain: subDomain,
    },
  };
}

const Reviews: React.FC<IReviewsProps> = ({ subdomain }: IReviewsProps) => {
  return (
    <>
      <Head>
        <title>DetailPad - Slug - Reviews</title>
        <meta name="description" content="DetailPad Slug - Reviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Paper withBorder p="md" radius="md">
        Slug Reviews
        <br />
        {subdomain}
      </Paper>
    </>
  );
};

export default Reviews;
