import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About/about";

import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";

describe("App Component", () => {
  let wrapper = null;

  const component = (path) => {
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <App />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    wrapper = component();
  });

  it("User Type is matching", () => {
    const switchRouter = wrapper.find({ "data-testid": "Switch" });
    expect(switchRouter.length).toBe(1);
  });

});
