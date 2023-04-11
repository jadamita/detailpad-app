import { Paper, Divider, Text } from "@mantine/core";

export const ProfileEdit = () => {
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
      </Paper>
    </>
  );
};
