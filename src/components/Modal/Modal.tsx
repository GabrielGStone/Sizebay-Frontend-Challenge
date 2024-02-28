import AddItems from "../AddItems";
import Dates from "../Date/Date";
import ProgressBar from "../ProgressBar";
import Search from "../Search";
import { Container } from "./styles";

const Modal = () => {
  return (
    <Container>
      <Dates />
      <ProgressBar />
      <Search />
      <AddItems />
    </Container>
  );
};

export default Modal;
