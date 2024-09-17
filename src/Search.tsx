import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import React from "react";

type SearchProps = {
  initialValue: string;
  onSearch: (value: string) => void;
};

export default function Search( { initialValue = '', onSearch}: SearchProps): JSX.Element {
  const [toSearch, setSearch] = React.useState( initialValue);
  return (
      <Input
        value={toSearch}
        endDecorator={
          <Button
            variant="soft"
            size="sm"
            onClick={() => onSearch(toSearch)}
          >
            Search
          </Button>
        }
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onSearch(toSearch)
          }
        }}
      />
  );
}
