import { Input, Add, Box, Circle } from "./styles";

const AddItems = () => {
  return (
    <Box>
      <Input placeholder="Add new item…"></Input>
      <Add>
        <Circle>+</Circle>
      </Add>
    </Box>
  );
};

export default AddItems;
