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
        buttonSelected={buttonSelected === "done"}
      >
        {buttonSelected === "done" ? "✓" : ""} Done
      </Button>
      <Button
        onClick={() =>
          buttonSelected === "pending"
            ? setButtonSelected("")
            : setButtonSelected("pending")
        }
        buttonSelected={buttonSelected === "pending"}
      >
        {buttonSelected === "pending" ? "✓" : ""} Pending
      </Button>
    </div>
  );
};

export default FilterButtons;
