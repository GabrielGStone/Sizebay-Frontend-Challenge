import { Button } from "./styles";

const FilterButtons = () => {
  return (
    <>
      <Button isActived={false}>{false ? "✓" : ""} Done</Button>
      <Button isActived={false}>{true ? "✓" : ""} Pending</Button>
    </>
  );
};

export default FilterButtons;
