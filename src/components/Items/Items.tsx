import { useSelector } from "react-redux";
import Item from "./Item";
import { Container } from "./styles";
import { RootState } from "../../state";

const Items = () => {
  const todo = useSelector((state: RootState) => state.todo.tasks);

  console.log(todo);
  return (
    <Container>
      {todo.map(({ id, title, isChecked }: any) => (
        <Item id={id} title={title} isChecked={isChecked} />
      ))}
    </Container>
  );
};

export default Items;
