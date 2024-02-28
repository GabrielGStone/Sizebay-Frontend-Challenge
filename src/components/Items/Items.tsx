import Item from "./Item";
import { Container } from "./styles";

const Items = () => {
  const mock = [1, 2, 3];
  return (
    <Container>
      {mock.map(() => (
        <Item />
      ))}
    </Container>
  );
};

export default Items;
