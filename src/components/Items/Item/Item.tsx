import { FC } from "react";
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
  isChecked?: boolean;
}
const Item: FC<itemProps> = ({ id, title, isChecked }) => {
  const dispatch = useDispatch();

  return (
    <Box>
      <Text>{title}</Text>
      <Buttons>
        <DeleteTask onClick={() => dispatch(todoActions.deleteTodo(id))}>
          <Circle2>-</Circle2>
        </DeleteTask>
        <CompleteTask>
          <Circle>✓</Circle>
        </CompleteTask>
      </Buttons>
    </Box>
  );
};

export default Item;
