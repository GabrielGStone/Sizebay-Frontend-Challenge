import { useDispatch } from "react-redux";
import { Input, Add, Box, Circle } from "./styles";
import { todoActions } from "../../state";
import { ChangeEvent, useState } from "react";

const AddItems = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text) dispatch(todoActions.setTodo(text));
    setText("");
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <Box>
      <Input
        placeholder="Add new item…"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Add onClick={() => handleAddTask()}>
        <Circle>+</Circle>
      </Add>
    </Box>
  );
};

export default AddItems;
