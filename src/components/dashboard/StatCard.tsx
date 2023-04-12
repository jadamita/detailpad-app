import { Paper, Group, rem, createStyles, Text } from "@mantine/core";
import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconCalendar,
} from "@tabler/icons-react";
import { stat } from "fs";
import { cloneElement, createElement } from "react";

interface IStatCard {
  title: string;
  value: string;
  diff: number;
  icon: object;
  caption: string;
}

export const StatCard = (props: IStatCard) => {
  const DiffIcon = props.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

  const useStyles = createStyles((theme) => ({
    root: {
      padding: `calc(${theme.spacing.xl} * 1.5)`,
    },

    value: {
      fontSize: rem(24),
      fontWeight: 700,
      lineHeight: 1,
    },

    diff: {
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
    },

    icon: {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.gray[4],
    },

    title: {
      fontWeight: 700,
      textTransform: "uppercase",
    },
  }));

  const { classes } = useStyles();

  return (
    <>
      <Paper withBorder p="md" radius={"md"} key={props.title}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {props.title}
          </Text>
          {cloneElement(props.icon as React.ReactElement<any>, {
            size: "1.4rem",
            stroke: "1.5",
            className: classes.icon,
          })}
        </Group>
        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{props.value}</Text>
          <Text
            color={props.diff > 0 ? "teal" : "red"}
            fz="sm"
            fw={500}
            className={classes.diff}
          >
            <span>{props.diff}%</span>
            <DiffIcon size="1rem" stroke={1.5} />
          </Text>
        </Group>
        <Text fz="xs" c="dimmed" mt={7}>
          {props.caption}
        </Text>
      </Paper>
    </>
  );
};
