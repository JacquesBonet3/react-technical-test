import {useIssue} from "./useIssue";
import Stack from "@mui/joy/Stack";
import {useUsers} from "./useUsers.ts";
import User from "./User.tsx";


export default function Users(): JSX.Element {
  const url = useIssue( state => state.url)
  const usersInfo = useUsers(url);

  return (
    <>
      {usersInfo && (
        <Stack spacing={2} justifyContent="flex-end" px={2} py={3}>
          {usersInfo.map(( userInfo) => (
            <User
              key={userInfo.user.login}
              {...userInfo}
            />
          ))}
        </Stack>
      )}
    </>
  );
}
