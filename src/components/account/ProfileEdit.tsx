import {
  Paper,
  Divider,
  Text,
  TextInput,
  Button,
  Group,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { api } from "~/utils/api";

import timeZones from "../../static/timezones.json";
import { IconGlobe } from "@tabler/icons-react";

export const ProfileEdit = () => {
  const { data, isLoading, refetch } = api.profile.getAccountProfile.useQuery();
  const setProfileMutation = api.profile.setAccountProfile.useMutation({
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
      timeZone: data?.timeZone || "",
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
      timeZone: data?.timeZone || "",
    });
    /* eslint-disable react-hooks/exhaustive-deps */
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
                await setProfileMutation.mutateAsync({
                  firstName: values.firstName || "",
                  lastName: values.lastName || "",
                  timeZone: values.timeZone || "",
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
          <Select
            mt={15}
            icon={<IconGlobe size="1rem" />}
            label={`Time Zone`}
            placeholder="Pick one"
            maxDropdownHeight={280}
            disabled={isLoading}
            {...profileForm.getInputProps("timeZone")}
            data={timeZones.map((item) => ({
              value: item.value,
              label: item.text,
            }))}
          />
          <Divider my="sm" />
          <Group position="right">
            <Button disabled={setProfileMutation.isLoading} type="submit">
              Update
            </Button>
          </Group>
        </form>
      </Paper>
    </>
  );
};
