import { FC } from "react";
import { Input, Glass, Box } from "./styles";

interface searchProps {
  searchTodo: string;
  setSearchTodo: any;
}
const SearchBar: FC<searchProps> = ({ searchTodo, setSearchTodo }) => {
  return (
    <Box>
      <Input
        placeholder="Search items"
        value={searchTodo}
        onChange={(e) => setSearchTodo(e.target.value)}
      />
      <Glass>🔍</Glass>
    </Box>
  );
};

export default SearchBar;
