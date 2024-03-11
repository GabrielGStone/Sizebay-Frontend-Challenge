import { FC } from "react";
import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import { Container } from "./styles";

interface searchProps {
  searchTodo: string;
  setSearchTodo: any;
  selected: string;
  setSelected: any;
}
const Search: FC<searchProps> = ({
  searchTodo,
  setSearchTodo,
  selected,
  setSelected,
}) => {
  return (
    <Container>
      <FilterButtons selected={selected} setSelected={setSelected} />
      <SearchBar searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
    </Container>
  );
};

export default Search;
