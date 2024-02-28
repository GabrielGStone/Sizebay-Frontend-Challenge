import { Button } from "./styles";

const FilterButtons = () => {
  return (
    <div style={{ display: "flex" }}>
      <Button isActived={false}>{false ? "✓" : ""} Done</Button>
      <Button isActived={false}>{true ? "✓" : ""} Pending</Button>
    </div>
  );
};

export default FilterButtons;
