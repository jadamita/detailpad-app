import { Center, Container } from "@mantine/core";
import { PropsWithChildren } from "react";

export default function BareLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Center
        sx={(theme) => ({
          minHeight: "100vh",
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        })}
      >
        <Container size="xs" sx={{ width: 480, paddingBottom: 16 }}>
          {children}
        </Container>
      </Center>
    </>
  );
}
