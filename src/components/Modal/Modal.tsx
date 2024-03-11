import { useSelector } from "react-redux";
import AddItems from "../AddItems";
import Dates from "../Date/Date";
import Items from "../Items";
import ProgressBar from "../ProgressBar";
import Search from "../Search";
import { Container } from "./styles";
import { RootState } from "../../state";
import { useEffect, useState } from "react";

const Modal = () => {
  const todo = useSelector((state: RootState) => state.todo.tasks);
  const [searchTodo, setSearchTodo] = useState("");
  const [progress, setProgress] = useState(0);

  const a = todo.filter((data: any) => {
    return data.isDone === true;
  });

  useEffect(() => {
    a && setProgress((a.length / todo.length) * 100);
  }, [todo.length, a]);

  return (
    <Container>
      <Dates />
      <ProgressBar progress={progress} />
      <Search searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
      <AddItems />
      <Items todo={todo} searchTodo={searchTodo} />
    </Container>
  );
};

export default Modal;
