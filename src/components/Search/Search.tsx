import { FC } from "react";
import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import { Container } from "./styles";

interface searchProps {
  searchTodo: string;
  setSearchTodo: any;
}
const Search: FC<searchProps> = ({ searchTodo, setSearchTodo }) => {
  return (
    <Container>
      <FilterButtons />
      <SearchBar searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
    </Container>
  );
};

export default Search;
