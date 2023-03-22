import { type NextPage } from "next";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { useForm } from "@mantine/form";

interface IForgotProps {
  email: string;
}

const Forgot: NextPage = () => {
  const forgotForm = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const { isLoading, isError, isSuccess, data } =
    api.user.register.useMutation();

  const submitForm = async (values: IForgotProps) => {
    console.log(values);
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Forgot Password
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{" "}
        <Anchor href="/login" size="sm">
          Login
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={forgotForm.onSubmit((values) => submitForm(values))}>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...forgotForm.getInputProps("email")}
          />
          <Button type="submit" fullWidth mt="xl">
            Send Password Reset Email
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Forgot;
