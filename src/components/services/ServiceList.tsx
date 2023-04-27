/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Paper,
  Divider,
  Text,
  Checkbox,
  Group,
  Avatar,
  TransferList,
  TransferListData,
  TransferListItemComponent,
  TransferListItemComponentProps,
  LoadingOverlay,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

const ItemComponent: TransferListItemComponent = ({
  data,
  selected,
}: TransferListItemComponentProps) => (
  <Group noWrap>
    {/* <Avatar src={data.image} radius="xl" size="lg" /> */}
    <Avatar src={data.image} size="lg" />
    <div style={{ flex: 1 }}>
      <Text size="sm" weight={500}>
        {data.label}
      </Text>
      <Text size="xs" color="dimmed" weight={400}>
        {data.description}
      </Text>
      {/* <Text size="md" color="dimmed" weight={600}>
        $35
      </Text> */}
    </div>
    <Checkbox
      checked={selected}
      //   onChange={() => {}}
      tabIndex={-1}
      sx={{ pointerEvents: "none" }}
    />
  </Group>
);

export const ServiceList = () => {
  const {
    data: services,
    isLoading,
    refetch,
  } = api.service.getServices.useQuery();
  const [data, setData] = useState<TransferListData>([[], []]);
  const saveServicesMutation = api.service.updateServices.useMutation({
    onError: () => {
      notifications.show({
        color: "red",
        title: "Error!",
        message: "Unable to update service list!",
      });
    },
    onSuccess: async () => {
      await refetch();
      notifications.clean();
      notifications.show({
        color: "green",
        title: "Success!",
        message: "Successfully updated your service list!",
      });
    },
  });

  useEffect(() => {
    if (services != undefined) {
      setData(services);
    }
  }, [services]);

  if (isLoading) {
    return <LoadingOverlay visible={isLoading} overlayBlur={2} />;
  }

  const updateList = async (value: TransferListData) => {
    setData(value);
    await saveServicesMutation.mutateAsync({
      selected: value[1].map((x) => Number(x.value)),
    });
  };

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
          Manage Services
        </Text>
        <Text
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily || ""}`,
            fontSize: 16,
          })}
        >
          Select the services that are available on your booking page
        </Text>
        <Divider my="sm" pb={5} />
        <TransferList
          value={data}
          onChange={updateList}
          searchPlaceholder="Search services..."
          nothingFound="No services"
          titles={["All Services", "My Services"]}
          listHeight={600}
          breakpoint="sm"
          itemComponent={ItemComponent}
          filter={(query, item) =>
            item.label.toLowerCase().includes(query.toLowerCase().trim()) ||
            item.description.toLowerCase().includes(query.toLowerCase().trim())
          }
        />
      </Paper>
    </>
  );
};
