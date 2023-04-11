import {
  Paper,
  Divider,
  Text,
  Image,
  Skeleton,
  Group,
  Button,
  FileInput,
  Progress,
  rem,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconTrash, IconUpload } from "@tabler/icons-react";
import { S3 } from "aws-sdk";
import { useState } from "react";
import { api } from "~/utils/api";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3({
  endpoint: process.env.R2_ENDPOINT,
  accessKeyId: process.env.R2_KEY_ID,
  secretAccessKey: process.env.R2_SECRET,
  signatureVersion: process.env.R2_SIG_VER,
});

export const AvatarEdit = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [upload, setUpload] = useState<S3.ManagedUpload | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProg] = useState(0);

  const { data: avatar, isLoading, refetch } = api.user.getAvatar.useQuery();
  const setAvatarMutation = api.user.setAvatar.useMutation({
    onSuccess: async () => {
      await refetch();
      setFile(null);
      notifications.show({
        color: "green",
        title: "Success!",
        message: "Successfully updated your avatar! 🎉",
      });
    },
    onError: () => {
      notifications.show({
        color: "red",
        title: "Error!",
        message: "Error when uploading your avatar",
      });
    },
  });

  const uploadAvatar = async () => {
    setIsUploading(true);
    if (file != null) {
      const fileName = `${uuidv4()}}_${file.name}`;

      const params: S3.Types.PutObjectRequest = {
        Bucket: process.env.R2_BUCKET_NAME as string,
        Key: `${"avatars/"}${fileName}`,
        Body: file,
      };

      console.log(params);

      try {
        const upload = s3.upload(params);
        setUpload(upload);
        upload.on("httpUploadProgress", (p) => {
          const prog = (p.loaded / p.total) * 100;
          setProg(prog);
        });
        await upload.promise();
        setAvatarMutation.mutate({ name: fileName });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getAvatar = () => {
    if (file) return URL.createObjectURL(file);
    return `${process.env.MEDIA_URL as string}/avatars/${
      avatar != null ? avatar : "default_ava.jpg"
    }`;
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
          Avatar
        </Text>
        <Divider my="sm" pb={5} />
        {isLoading ? (
          <Skeleton height={200} width={200} mb="xl" radius={"md"} />
        ) : (
          <Image
            radius={"md"}
            width={200}
            height={200}
            src={getAvatar()}
            alt="Profile Picture"
            caption={file != null ? "Avatar Preview" : "Current Avatar"}
            withPlaceholder
            placeholder={<Text align="center">Error loading Image</Text>}
          />
        )}
        <FileInput
          value={file}
          onChange={setFile}
          icon={<IconUpload size={rem(14)} />}
          placeholder="Click here to select image"
          label="New Avatar"
          accept="image/png,image/jpeg"
          withAsterisk
        />
        {isUploading && <Progress mt={15} value={progress} />}
        <Group position="right" mt="md">
          <Button
            leftIcon={<IconTrash size={rem(18)} />}
            color="red"
            disabled={file == null}
            onClick={() => {
              setFile(null);
              setIsUploading(false);
            }}
          >
            Clear
          </Button>
          <Button
            disabled={file == null}
            onClick={async () => {
              await uploadAvatar();
            }}
          >
            Upload
          </Button>
        </Group>
        {/* <FileButton onChange={setFile} accept="image/png,image/jpeg">
            {(props) => <Button {...props}>Upload image</Button>}
          </FileButton> */}
      </Paper>
    </>
  );
};
