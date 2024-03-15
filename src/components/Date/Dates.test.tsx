import { render } from "@testing-library/react";
import Dates from "./Dates";
import { Provider } from "react-redux";
import { store } from "../../state";

describe("Componente Dates", () => {
  const dataAtual: Date = new Date();

  it("Date é redenrizado corretamente com o day", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dates />
      </Provider>
    );

    //eslint-disable-next-line
    const linkElement = getByText(dataAtual.getDate());

    expect(linkElement).toBeInTheDocument();
  });

  it("Date é redenrizado corretamente com o month", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dates />
      </Provider>
    );

    //eslint-disable-next-line
    const linkElement = getByText(
      dataAtual.toLocaleString("en-US", { month: "short" })
    );

    expect(linkElement).toBeInTheDocument();
  });

  it("Date é redenrizado corretamente com o year", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dates />
      </Provider>
    );

    //eslint-disable-next-line
    const linkElement = getByText(dataAtual.getFullYear());

    expect(linkElement).toBeInTheDocument();
  });

  it("Date é redenrizado corretamente com o weekday", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dates />
      </Provider>
    );

    //eslint-disable-next-line
    const linkElement = getByText(
      dataAtual.toLocaleString("en-US", { weekday: "long" })
    );

    expect(linkElement).toBeInTheDocument();
  });
});
