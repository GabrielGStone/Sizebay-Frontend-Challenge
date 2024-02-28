import { Input, Glass, Box } from "./styles";

const SearchBar = () => {
  return (
    <Box>
      <Input placeholder="Search items"></Input>
      <Glass>🔍</Glass>
    </Box>
  );
};

export default SearchBar;
