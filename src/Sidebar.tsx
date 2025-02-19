import Sheet from "@mui/joy/Sheet";
import SearchIssue from "./SearchIssue.tsx";
import Users from "./Users.tsx";

export default function Sidebar() {
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: "sticky",
        transition: "transform 0.4s, width 0.4s",
        height: "100dvh",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <SearchIssue />
      <Users />
    </Sheet>
  );
}
