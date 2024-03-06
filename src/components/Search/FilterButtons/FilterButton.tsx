import { Button } from "./styles";

const FilterButtons = () => {
  return (
    <div style={{ display: "flex" }}>
      <Button>{false ? "✓" : ""} Done</Button>
      <Button isactived={false}>{true ? "✓" : ""} Pending</Button>
    </div>
  );
};

export default FilterButtons;
