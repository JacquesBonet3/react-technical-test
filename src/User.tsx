import { Avatar } from "@mui/joy";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import {UserInfo} from "./types.ts";
import {useExcludeUsers} from "./useExcludeUsers.ts";
import Checkbox from '@mui/joy/Checkbox';

type UserProps = UserInfo

export default function User({ msgNumber, user }: UserProps) {
  const { excludes, change} = useExcludeUsers();
  return (
    <Stack direction="row" alignContent="center" spacing={2}>
      <Checkbox
        checked={excludes.indexOf(user.login) == -1}
        onChange={() => change(user.login)}
      />
      <Avatar size="sm" variant="solid" src={user.avatar_url} />
      <Box>
        <Stack direction="row" spacing={2} sx={{ alignContent: 'center' }}>
          <Typography level="body-xs" fontWeight="bold">
            {user.login}
          </Typography>
          <Typography level="body-xs">{msgNumber}</Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
