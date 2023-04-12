import { Paper, Divider, Text, TextInput, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { api } from "~/utils/api";

export const ProfileEdit = () => {
  const { data, isLoading, refetch } = api.profile.getAccountProfile.useQuery();
  const setProfile = api.profile.setAccountProfile.useMutation({
    onSuccess: async () => {
      await refetch();
      notifications.show({
        color: "green",
        title: "Success!",
        message: "Successfully updated your profile! 🎉",
      });
    },
    onError: () => {
      notifications.show({
        color: "red",
        title: "Error!",
        message: "Error when uploading your profile",
      });
    },
  });

  const profileForm = useForm({
    initialValues: {
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
    },
    validate: {
      firstName: (value) =>
        value.length < 1 ? "You must enter a fist name" : null,
      lastName: (value) =>
        value.length < 1 ? "You must enter a last name" : null,
    },
  });

  useEffect(() => {
    profileForm.setValues({
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
    });
  }, [isLoading, data]);

  return (
    <>
      <Paper withBorder p={10} radius="md">
        <Text
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily || ""}`,
            fontWeight: 500,
            fontSize: 24,
          })}
        >
          Profile
        </Text>
        <Divider my="sm" pb={5} />
        <form
          onSubmit={profileForm.onSubmit(async (values) => {
            if (profileForm.isTouched()) {
              try {
                await setProfile.mutateAsync({
                  firstName: values.firstName || "",
                  lastName: values.lastName || "",
                });
              } catch (error) {
                console.error(error);
              }
              profileForm.resetTouched();
            }
          })}
        >
          <TextInput
            withAsterisk
            label="First Name"
            placeholder="John"
            disabled={isLoading}
            {...profileForm.getInputProps("firstName")}
          />
          <TextInput
            mt={15}
            withAsterisk
            label="Last Name"
            placeholder="Doe"
            disabled={isLoading}
            {...profileForm.getInputProps("lastName")}
          />
          <Divider my="sm" />
          <Group position="right">
            <Button type="submit">Update</Button>
          </Group>
        </form>
      </Paper>
    </>
  );
};
