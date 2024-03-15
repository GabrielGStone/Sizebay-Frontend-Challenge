import { Container, Day, Month, Weekday, Wrap, Year } from "./styles";

const Dates = () => {
  const dataAtual: Date = new Date();
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Day>{dataAtual.getDate()}</Day>
        <Wrap>
          <Month>{dataAtual.toLocaleString("en-US", { month: "short" })}</Month>
          <Year>{dataAtual.getFullYear()}</Year>
        </Wrap>
      </div>

      <Weekday>
        {dataAtual.toLocaleString("en-US", { weekday: "long" })}
      </Weekday>
    </Container>
  );
};

export default Dates;
