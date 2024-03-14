import { render } from "@testing-library/react";
import AddItems from "./AddItems";
import { Provider } from "react-redux";
import { store } from "../../state";

describe("Componente AddItems", () => {
  it("AddItems é redenrizado corretamente com o texto: Add new item", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <AddItems />
      </Provider>
    );

    //eslint-disable-next-line
    const linkElement = getByPlaceholderText(/Add new item…/);

    expect(linkElement).toBeInTheDocument();
  });
});
