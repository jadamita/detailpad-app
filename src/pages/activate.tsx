import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Button,
  LoadingOverlay,
  Alert,
} from "@mantine/core";

import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { IconAlertCircle, IconLock, IconMail } from "@tabler/icons-react";
import { NextPageWithLayout } from "~/components/util/LayoutTypes";
import BareLayout from "~/layouts/BareLayout";
import { api } from "~/utils/api";

interface IActivateProps {
  email: string;
  password: string;
  confirmPassword: string;
}

const Activate: NextPageWithLayout = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const hash = router.query.hash as string;

  const activateMutation = api.user.activateUser.useMutation({
    onSuccess: () => {
      console.log("success");
      setIsLoading(false);
    },
    onError: () => {
      console.log("error");
      setIsLoading(false);
      setError("error activating user");
    },
  });

  const { data: user, isLoading: isUserLoading } =
    api.user.getUnactivatedUser.useQuery({
      hash: hash,
    });

  const activateForm = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
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
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords do not match" : null,
    },
  });

  useEffect(() => {
    setError("");
    setIsLoading(true);
    if (user) {
      activateForm.setFieldValue("email", user.email as string);

      console.log("user", user);
      setIsLoading(false);
    } else {
      console.log("user not found");
      setIsLoading(false);

      if (!isUserLoading) {
        setError("Unable to find user");
      }
    }
  }, [isUserLoading, user, activateForm]);

  const submitForm = async (values: IActivateProps) => {
    setIsLoading(true);
    setError("");
    console.log(values);

    await activateMutation.mutateAsync({
      hash: hash,
      password: values.password,
    });
  };

  return (
    <>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily || ""}`,
          fontWeight: 900,
        })}
      >
        Activate your Account
      </Title>
      {/* <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor href="/register" size="sm">
          Create account
        </Anchor>
      </Text> */}

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
          onSubmit={activateForm.onSubmit(
            async (values) => await submitForm(values)
          )}
        >
          <TextInput
            label="Email"
            placeholder="Email"
            disabled
            icon={<IconMail size="1rem" />}
            {...activateForm.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            disabled={user == null}
            icon={<IconLock size="1rem" />}
            {...activateForm.getInputProps("password")}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            required
            mt="md"
            disabled={user == null}
            icon={<IconLock size="1rem" />}
            {...activateForm.getInputProps("confirmPassword")}
          />
          <Button type="submit" fullWidth mt="xl" disabled={user == null}>
            Activate Account
          </Button>
        </form>
      </Paper>
    </>
  );
};

Activate.getLayout = function getLayout(page: ReactElement) {
  return <BareLayout>{page}</BareLayout>;
};

export default Activate;
