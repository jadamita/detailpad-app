import { NextPageContext, type NextPage } from "next";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  LoadingOverlay,
  Alert,
} from "@mantine/core";
import { getSession, signIn, SignInResponse } from "next-auth/react";

import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useState } from "react";
import { IconAlertCircle } from "@tabler/icons-react";

interface ILoginProps {
  email: string;
  password: string;
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

const Login: NextPage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const loginForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => {
        if (value.length < 6) {
          return "Password must be at least 6 characters";
        } else {
          return null;
        }
      },
    },
  });

  const submitForm = async (values: ILoginProps) => {
    setIsLoading(true);
    setError("");
    const result: SignInResponse | undefined = await signIn("credentials", {
      username: values.email,
      password: values.password,
      redirect: false,
    });
    if (result?.status === 200) {
      await router.push("/");
    } else {
      setIsLoading(false);
      setError("Invalid username or password");
    }
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily || ""}`,
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor href="/register" size="sm">
          Create account
        </Anchor>
      </Text>

      <br />
      {error && (
        <Alert
          icon={<IconAlertCircle size="1rem" />}
          title="Error!"
          color="red"
        >
          {error}
        </Alert>
      )}

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <LoadingOverlay visible={isLoading} overlayBlur={2} />
        <form
          onSubmit={loginForm.onSubmit(
            async (values) => await submitForm(values)
          )}
        >
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...loginForm.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...loginForm.getInputProps("password")}
          />
          <Group position="apart" mt="lg">
            <Anchor href="/forgot" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
