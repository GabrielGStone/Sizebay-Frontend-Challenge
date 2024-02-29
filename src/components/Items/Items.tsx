import { useSelector } from "react-redux";
import Item from "./Item";
import { Container } from "./styles";
import { RootState } from "../../state";

const Items = () => {
  const todo = useSelector((state: RootState) => state.todo.tasks);

  console.log(todo);
  return (
    <Container>
      {todo.map(({ id, title, isDone }: any) => (
        <div key={id} style={{ width: "100%" }}>
          <Item id={id} title={title} isDone={isDone} />
        </div>
      ))}
    </Container>
  );
};

export default Items;
