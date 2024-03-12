import { useDispatch } from "react-redux";
import { Input, Add, Box, Circle } from "./styles";
import { todoActions } from "../../state";
import { ChangeEvent, FC, useState } from "react";

interface addItemProps {
  taskSelected: number;
  setTaskSelected: any;
}

const AddItems: FC<addItemProps> = ({ taskSelected, setTaskSelected }) => {
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
    <Box onClick={() => setTaskSelected(0)} taskSelected={taskSelected}>
      <Input
        placeholder="Add new item…"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        taskSelected={taskSelected}
      />
      <Add onClick={() => handleAddTask()} taskSelected={taskSelected}>
        <Circle>+</Circle>
      </Add>
    </Box>
  );
};

export default AddItems;
