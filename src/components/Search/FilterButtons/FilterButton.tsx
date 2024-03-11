import { FC } from "react";
import { Button } from "./styles";

interface buttonProps {
  selected: string;
  setSelected: any;
}
const FilterButtons: FC<buttonProps> = ({ selected, setSelected }) => {
  return (
    <div style={{ display: "flex" }}>
      <Button
        onClick={() =>
          selected === "done" ? setSelected("") : setSelected("done")
        }
        selected={selected === "done"}
      >
        {selected === "done" ? "✓" : ""} Done
      </Button>
      <Button
        onClick={() =>
          selected === "pending" ? setSelected("") : setSelected("pending")
        }
        selected={selected === "pending"}
      >
        {selected === "pending" ? "✓" : ""} Pending
      </Button>
    </div>
  );
};

export default FilterButtons;
