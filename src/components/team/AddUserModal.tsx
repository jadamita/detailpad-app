import { Button, Grid, Modal, TextInput, useMantineTheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import { api } from "~/utils/api";

interface IAddUserProps {
  isOpen: boolean;
  closeModal: () => void;
}

interface IAddUserValues {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

function AddUserModal({ isOpen, closeModal }: IAddUserProps) {
  const theme = useMantineTheme();
  //   const isMobile = useMediaQuery("(max-width: 50em)");

  const addUserMutation = api.user.addUser.useMutation();
  const { refetch } = api.user.getUsers.useQuery();

  const addUserForm = useForm({
    initialValues: {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
    },

    validate: {
      firstName: (value) =>
        value.length < 1 ? "Please enter a first name" : null,
      lastName: (value) =>
        value.length < 1 ? "Please enter a last name" : null,
      username: (value) =>
        value.length < 3 ? "Name must have at least 3 letters" : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Please enter a valid email",
    },
  });

  const addNewUser = async (values: IAddUserValues) => {
    console.log(values);
    const res = await addUserMutation.mutateAsync(values);
    console.log(res);
    addUserForm.reset();
    await refetch();
    closeModal();
  };

  return (
    <>
      <Modal
        opened={isOpen}
        onClose={() => {
          addUserForm.reset();
          closeModal();
        }}
        title="Add New User"
        // fullScreen={isMobile}
        transitionProps={{ transition: "fade", duration: 200 }}
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <form
          onSubmit={addUserForm.onSubmit((values: IAddUserValues) =>
            addNewUser(values)
          )}
        >
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                label="First Name"
                placeholder="First Name"
                {...addUserForm.getInputProps("firstName")}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                label="Last Name"
                placeholder="Last Name"
                {...addUserForm.getInputProps("lastName")}
              />
            </Grid.Col>
            <Grid.Col>
              <TextInput
                withAsterisk
                label="Username"
                placeholder="Desired Username"
                {...addUserForm.getInputProps("username")}
              />
            </Grid.Col>
            <Grid.Col>
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...addUserForm.getInputProps("email")}
              />
            </Grid.Col>
            <Grid.Col>
              <Button type="submit">Add User</Button>
            </Grid.Col>
          </Grid>
        </form>
      </Modal>
    </>
  );
}

export default AddUserModal;
