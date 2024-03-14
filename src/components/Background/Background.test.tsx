import { render } from "@testing-library/react";
import Background from "./Background";
import { Provider } from "react-redux";
import { store } from "../../state";

describe("Componente Background", () => {
  it("Background é redenrizado corretamente com o mock children", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Background>mock</Background>
      </Provider>
    );

    //eslint-disable-next-line
    const linkElement = getByText(/mock/);

    expect(linkElement).toBeInTheDocument();
  });
});
