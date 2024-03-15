import { useSelector } from "react-redux";
import AddItems from "../AddItems";
import Dates from "../Date/Dates";
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
  const [buttonSelected, setButtonSelected] = useState("");
  const [taskSelected, setTaskSelected] = useState(0);
  const tasksDone = todo.filter((data: any) => {
    return data.isDone === true;
  });

  useEffect(() => {
    if (tasksDone)
      todo.length
        ? setProgress((tasksDone.length / todo.length) * 100)
        : setProgress(0);
  }, [todo, tasksDone]);

  return (
    <Container>
      <Dates />
      <ProgressBar progress={progress} />
      <Search
        searchTodo={searchTodo}
        setSearchTodo={setSearchTodo}
        buttonSelected={buttonSelected}
        setButtonSelected={setButtonSelected}
      />
      <AddItems taskSelected={taskSelected} setTaskSelected={setTaskSelected} />
      <Items
        todo={todo}
        searchTodo={searchTodo}
        buttonSelected={buttonSelected}
        taskSelected={taskSelected}
        setButtonSelected={setButtonSelected}
        setSearchTodo={setSearchTodo}
        setTaskSelected={setTaskSelected}
      />
    </Container>
  );
};

export default Modal;
