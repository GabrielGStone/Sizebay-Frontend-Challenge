import { FC, useEffect, useState } from "react";
import {
  Box,
  Buttons,
  Circle,
  Circle2,
  CompleteTask,
  DeleteTask,
  Text,
} from "./styles";
import { useDispatch } from "react-redux";
import { todoActions } from "../../../state";
import { useDebounce } from "@uidotdev/usehooks";

interface itemProps {
  id: any;
  title: string;
  isDone: boolean;
  taskSelected: number;
  setTaskSelected: any;
}
const Item: FC<itemProps> = ({
  id,
  title,
  isDone,
  taskSelected,
  setTaskSelected,
}) => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState(title);
  const [doneToggle, setDoneToggle] = useState(!!isDone);
  const textDebounce = useDebounce(inputText, 300);
  const checkTodo = (isDone: boolean) => {
    const payload = {
      isDone: isDone,
      id: id,
      title: title,
    };
    dispatch(todoActions.editTodo(payload));
  };

  const handleCompleteButton = () => {
    setDoneToggle(!doneToggle);
    checkTodo(!doneToggle);
  };

  useEffect(() => {
    const payload = { id: id, isDone: isDone, title: inputText };
    dispatch(todoActions.editTodo(payload));
    // eslint-disable-next-line
  }, [textDebounce]);

  return (
    <Box onClick={() => setTaskSelected(id)}>
      <Text
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        taskSelected={taskSelected}
        id={id}
      />
      {taskSelected === id && (
        <Buttons>
          <DeleteTask onClick={() => dispatch(todoActions.deleteTodo(id))}>
            <Circle2>-</Circle2>
          </DeleteTask>
          <CompleteTask onClick={() => handleCompleteButton()}>
            <Circle>✓</Circle>
          </CompleteTask>
        </Buttons>
      )}
    </Box>
  );
};

export default Item;
