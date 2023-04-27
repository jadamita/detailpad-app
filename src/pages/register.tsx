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
import {
  IconAlertCircle,
  IconAt,
  IconCheck,
  IconLock,
} from "@tabler/icons-react";
import { useState } from "react";

interface IRegisterProps {
  companyName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: NextPage = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const registerForm = useForm({
    initialValues: {
      companyName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      companyName: (value) => {
        const allowedChars = /[^a-zA-Z0-9 ]/g;
        if (value.length < 3) {
          return "Business Name must have at least 3 letters";
        }
        if (allowedChars.test(value)) {
          return "Business Name must not contain any special characters";
        }
        return null;
      },
      username: (value) => {
        const allowedChars = /[^a-zA-Z0-9 ]/g;
        if (value.length < 3) {
          return "Username Name must have at least 3 letters";
        }
        if (allowedChars.test(value)) {
          return "Username Name must not contain any special characters";
        }
        return null;
      },
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

  const registerMutation = api.user.register.useMutation({
    onError: (e) => {
      setError(e.message ?? "Error when registering for a new account");
    },
    onSuccess: () => {
      setSuccess(true);
      registerForm.reset();
    },
  });

  const submitForm = async (values: IRegisterProps) => {
    setError("");
    setSuccess(false);
    try {
      await registerMutation.mutateAsync(values);
    } catch (error) {
      setError(
        registerMutation.error?.message ??
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
          icon={<IconAlertCircle />}
          title="Error!"
          color="red"
          variant="filled"
        >
          {error}
        </Alert>
      )}
      {success && (
        <Alert
          icon={<IconCheck />}
          title="Success!"
          color="green"
          variant="filled"
        >
          Your new account has been created successfuly!
          <br />
          <Anchor href="/login" color="white">
            <strong>Please click here to login</strong>
          </Anchor>
        </Alert>
      )}

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <LoadingOverlay visible={registerMutation.isLoading} overlayBlur={2} />
        <form onSubmit={registerForm.onSubmit((values) => submitForm(values))}>
          <TextInput
            label="Business Name"
            placeholder="Your Company Name"
            required
            maxLength={64}
            {...registerForm.getInputProps("companyName")}
          />
          <TextInput
            label="Username"
            placeholder="Your username"
            mt="md"
            required
            maxLength={64}
            {...registerForm.getInputProps("username")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            required
            mt="md"
            icon={<IconAt size="1rem" />}
            maxLength={64}
            {...registerForm.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            required
            mt="md"
            icon={<IconLock size="1rem" />}
            maxLength={256}
            {...registerForm.getInputProps("password")}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            required
            mt="md"
            icon={<IconLock size="1rem" />}
            maxLength={256}
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
