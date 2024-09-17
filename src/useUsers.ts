import useFetch from "./useFetch.ts";
import {Comment, Issue, UserInfo} from "./types.ts";


export function useUsers( url: string) {
  const issue = useFetch<Issue>({ url});
  const comments = useFetch<Comment[]>({ url: issue.data?.comments_url }, { enabled: issue.isFetched });

  if (!comments || !comments.data)
    return [];

  return comments.data.reduce<UserInfo[]>(( acc, comment) => {
    const found = acc.findIndex( userInfo => userInfo.user.login === comment.user.login)

    if (found >= 0) {
      const newAcc = [...acc]

      newAcc[found].msgNumber++

      return newAcc
    }
    return [
      ...acc,
      {
        user: {
          login: comment.user.login,
          avatar_url: comment.user.avatar_url,
        },
        msgNumber: 1
      }
    ]
  }, [])
    .sort( (userInfo1, userInfo2) =>
      userInfo1.user.login.localeCompare(userInfo2.user.login))
}
