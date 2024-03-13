import { FC } from "react";
import { TooltipContainer, TooltipText } from "./style";

interface toolTipProps {
  text: string;
  children: any;
}
const TooltipBox: FC<toolTipProps> = ({ text, children }) => {
  return (
    <TooltipContainer>
      {children}
      <TooltipText>{text}</TooltipText>
    </TooltipContainer>
  );
};

export default TooltipBox;
