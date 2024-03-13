import Item from "./Item";
import { Container, Text, TextUnderLine, Wrap } from "./styles";
import { FC } from "react";

interface itemsProps {
  todo: any;
  searchTodo: string;
  buttonSelected: string;
  taskSelected: number;
  setTaskSelected: any;
  setButtonSelected: any;
  setSearchTodo: any;
}
const Items: FC<itemsProps> = ({
  todo,
  searchTodo,
  buttonSelected,
  taskSelected,
  setTaskSelected,
  setButtonSelected,
  setSearchTodo,
}) => {
  let selectedTasks = todo;

  if (buttonSelected)
    selectedTasks = selectedTasks.filter((todo: any) =>
      buttonSelected === "done" ? todo.isDone === true : todo.isDone === false
    );
  selectedTasks = selectedTasks.filter((todo: any) =>
    todo.title.toLowerCase().includes(searchTodo.toLowerCase())
  );

  return (
    <Container>
      {buttonSelected === "done" && !selectedTasks.length ? (
        <Text>
          There are no items marked as done.{" "}
          <TextUnderLine
            onClick={() => {
              setSearchTodo("");
              setButtonSelected();
            }}
          >
            Clean the search here
          </TextUnderLine>{" "}
          to see all items.
        </Text>
      ) : searchTodo && !selectedTasks.length ? (
        <Text>
          Your search found no results.{" "}
          <TextUnderLine
            onClick={() => {
              setSearchTodo("");
              setButtonSelected();
            }}
          >
            Clean the search here
          </TextUnderLine>{" "}
          to see all items.
        </Text>
      ) : (
        selectedTasks.map(({ id, title, isDone }: any) => (
          <Wrap key={id}>
            <Item
              id={id}
              title={title}
              isDone={isDone}
              taskSelected={taskSelected}
              setTaskSelected={setTaskSelected}
            />
          </Wrap>
        ))
      )}
    </Container>
  );
};

export default Items;
