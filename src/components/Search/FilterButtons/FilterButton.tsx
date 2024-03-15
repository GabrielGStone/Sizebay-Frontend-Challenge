import { FC } from "react";
import { Button } from "./styles";

interface buttonProps {
  buttonSelected: string;
  setButtonSelected: any;
}
const FilterButtons: FC<buttonProps> = ({
  buttonSelected,
  setButtonSelected,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <Button
        onClick={() =>
          buttonSelected === "done"
            ? setButtonSelected("")
            : setButtonSelected("done")
        }
        buttonselected={buttonSelected === "done" ? true : undefined}
      >
        {buttonSelected === "done" ? "✓" : ""} Done
      </Button>
      <Button
        onClick={() =>
          buttonSelected === "pending"
            ? setButtonSelected("")
            : setButtonSelected("pending")
        }
        buttonselected={buttonSelected === "pending" ? true : undefined}
      >
        {buttonSelected === "pending" ? "✓" : ""} Pending
      </Button>
    </div>
  );
};

export default FilterButtons;
