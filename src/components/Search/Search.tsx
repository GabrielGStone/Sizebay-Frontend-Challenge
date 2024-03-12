import { FC } from "react";
import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import { Container } from "./styles";

interface searchProps {
  searchTodo: string;
  setSearchTodo: any;
  buttonSelected: string;
  setButtonSelected: any;
}
const Search: FC<searchProps> = ({
  searchTodo,
  setSearchTodo,
  buttonSelected,
  setButtonSelected,
}) => {
  return (
    <Container>
      <FilterButtons
        buttonSelected={buttonSelected}
        setButtonSelected={setButtonSelected}
      />
      <SearchBar searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
    </Container>
  );
};

export default Search;
