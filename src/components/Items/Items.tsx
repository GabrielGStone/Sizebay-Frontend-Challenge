import { useSelector } from "react-redux";
import Item from "./Item";
import { Container } from "./styles";
import { RootState } from "../../state";

const Items = () => {
  const todo = useSelector((state: RootState) => state.todo.tasks);

  const mock = [1, 2, 3];
  return (
    <Container>
      {todo.map(() => (
        <Item />
      ))}
    </Container>
  );
};

export default Items;
