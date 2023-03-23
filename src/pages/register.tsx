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
  LoadingOverlay,
  Alert,
} from "@mantine/core";

import { api } from "~/utils/api";
import { isEmail, useForm } from "@mantine/form";
import { IconAlertCircle, IconAt, IconLock } from "@tabler/icons-react";
import { useState } from "react";

interface IRegisterProps {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: NextPage = () => {
  const [error, setError] = useState("");

  const registerForm = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      username: (value) =>
        value.length < 3 ? "Name must have at least 3 letters" : null,
      email: isEmail("Invalid email"),
      password: (value) => {
        if (value.length < 6) {
          return "Password must be at least 6 characters";
        } else {
          return null;
        }
      },
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });

  const registerMutation = api.user.register.useMutation();

  const submitForm = async (values: IRegisterProps) => {
    setError("");
    console.log(values);
    try {
      await registerMutation.mutateAsync(values);
    } catch (error) {
      setError(
        registerMutation.error?.message ||
          "Error when registering for a new account"
      );
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
        Join today!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{" "}
        <Anchor href="/login" size="sm">
          Login
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
        <LoadingOverlay visible={registerMutation.isLoading} overlayBlur={2} />
        <form onSubmit={registerForm.onSubmit((values) => submitForm(values))}>
          <TextInput
            label="Username"
            placeholder="Your username"
            required
            {...registerForm.getInputProps("username")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            required
            mt="md"
            icon={<IconAt size="1rem" />}
            {...registerForm.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            required
            mt="md"
            icon={<IconLock size="1rem" />}
            {...registerForm.getInputProps("password")}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            required
            mt="md"
            icon={<IconLock size="1rem" />}
            {...registerForm.getInputProps("confirmPassword")}
          />
          <Button type="submit" fullWidth mt="xl">
            Register
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
