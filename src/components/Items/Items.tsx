import Item from "./Item";
import { Container } from "./styles";
import { FC } from "react";

interface itemsProps {
  todo: any;
  searchTodo: any;
}
const Items: FC<itemsProps> = ({ todo, searchTodo }) => {
  let selectedTasks = todo;

  selectedTasks = selectedTasks.filter((todo: any) =>
    todo.title.toLowerCase().includes(searchTodo.toLowerCase())
  );

  return (
    <Container>
      {selectedTasks.map(({ id, title, isDone }: any) => (
        <div key={id} style={{ width: "100%" }}>
          <Item id={id} title={title} isDone={isDone} />
        </div>
      ))}
    </Container>
  );
};

export default Items;
