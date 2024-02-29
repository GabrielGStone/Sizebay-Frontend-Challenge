import { FC, useState } from "react";
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

interface itemProps {
  id: any;
  title: string;
  isDone: boolean;
}
const Item: FC<itemProps> = ({ id, title, isDone }) => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState(title);
  const [doneToggle, setDoneToggle] = useState(!!isDone);

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
  return (
    <Box>
      <Text value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <Buttons>
        {isDone ? <div>done</div> : ""}
        <DeleteTask onClick={() => dispatch(todoActions.deleteTodo(id))}>
          <Circle2>-</Circle2>
        </DeleteTask>
        <CompleteTask onClick={() => handleCompleteButton()}>
          <Circle>✓</Circle>
        </CompleteTask>
      </Buttons>
    </Box>
  );
};

export default Item;
