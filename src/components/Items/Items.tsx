import Item from "./Item";
import { Container } from "./styles";
import { FC } from "react";

interface itemsProps {
  todo: any;
  searchTodo: string;
  selected: string;
}
const Items: FC<itemsProps> = ({ todo, searchTodo, selected }) => {
  let selectedTasks = todo;

  if (selected)
    selectedTasks = selectedTasks.filter((todo: any) =>
      selected === "done" ? todo.isDone === true : todo.isDone === false
    );
  selectedTasks = selectedTasks.filter((todo: any) =>
    todo.title.toLowerCase().includes(searchTodo.toLowerCase())
  );

  return (
    <Container>
      {selectedTasks.map(({ id, title, isDone }: any) => (
        <div key={id} style={{ width: "680px" }}>
          <Item id={id} title={title} isDone={isDone} />
        </div>
      ))}
    </Container>
  );
};

export default Items;
