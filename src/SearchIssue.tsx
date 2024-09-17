import {useIssue} from "./useIssue";
import Search from "./Search.tsx";


export default function SearchIssue(): JSX.Element {
  const { uri, change } = useIssue()
  return (
      <Search
        initialValue={uri}
        onSearch={(value) => change(value)}
      />
  );
}
