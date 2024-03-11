import { FC } from "react";
import { Container, GrennBar } from "./styles";

interface barProps {
  progress: any;
}
const ProgressBar: FC<barProps> = ({ progress }) => {
  return (
    <Container>
      <GrennBar progress={progress} />
    </Container>
  );
};

export default ProgressBar;
