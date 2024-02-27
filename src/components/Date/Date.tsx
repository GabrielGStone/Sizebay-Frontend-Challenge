import { Container, Day, Month, Wrap, Year } from "./styles";

const Dates = () => {
  const dataAtual: Date = new Date();
  console.log(dataAtual);
  return (
    <Container>
      <div style={{ display: "flex" }}>
        <Day>{dataAtual.getDate()}</Day>
        <Wrap>
          <Month>{dataAtual.toLocaleString("en-US", { month: "short" })}</Month>
          <Year>{dataAtual.getFullYear()}</Year>
        </Wrap>
      </div>
      <div>
        <Year>{dataAtual.toLocaleString("en-US", { weekday: "long" })}</Year>
      </div>
    </Container>
  );
};

export default Dates;