import { Box, Buttons, Circle, CompleteTask, DeleteTask, Text } from "./styles";

const Item = () => {
  return (
    <Box>
      <Text>aaaaaaaaaaaaaaaaaaaaaaaa</Text>
      <Buttons>
        <DeleteTask>
          <Circle>-</Circle>
        </DeleteTask>
        <CompleteTask>
          <Circle>✓</Circle>
        </CompleteTask>
      </Buttons>
    </Box>
  );
};

export default Item;
