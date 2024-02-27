import { FC } from "react";
import { Container } from "./styles";

interface BackgroundProps {
  children: any;
}
const Background: FC<BackgroundProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Background;
