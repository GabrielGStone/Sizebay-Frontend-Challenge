import Item from "./Item";
import { Container } from "./styles";
import { FC } from "react";

interface itemsProps {
  todo: any;
  searchTodo: string;
  buttonSelected: string;
  taskSelected: number;
  setTaskSelected: any;
}
const Items: FC<itemsProps> = ({
  todo,
  searchTodo,
  buttonSelected,
  taskSelected,
  setTaskSelected,
}) => {
  let selectedTasks = todo;

  if (buttonSelected)
    selectedTasks = selectedTasks.filter((todo: any) =>
      buttonSelected === "done" ? todo.isDone === true : todo.isDone === false
    );
  selectedTasks = selectedTasks.filter((todo: any) =>
    todo.title.toLowerCase().includes(searchTodo.toLowerCase())
  );

  return (
    <Container>
      {selectedTasks.map(({ id, title, isDone }: any) => (
        <div key={id} style={{ width: "680px" }}>
          <Item
            id={id}
            title={title}
            isDone={isDone}
            taskSelected={taskSelected}
            setTaskSelected={setTaskSelected}
          />
        </div>
      ))}
    </Container>
  );
};

export default Items;
