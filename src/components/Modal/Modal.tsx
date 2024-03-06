import { useSelector } from "react-redux";
import AddItems from "../AddItems";
import Dates from "../Date/Date";
import Items from "../Items";
import ProgressBar from "../ProgressBar";
import Search from "../Search";
import { Container } from "./styles";
import { RootState } from "../../state";
import { useState } from "react";

const Modal = () => {
  const todo = useSelector((state: RootState) => state.todo.tasks);
  const [searchTodo, setSearchTodo] = useState("");

  return (
    <Container>
      <Dates />
      <ProgressBar />
      <Search searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
      <AddItems />
      <Items todo={todo} searchTodo={searchTodo} />
    </Container>
  );
};

export default Modal;
