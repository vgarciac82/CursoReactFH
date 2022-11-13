import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("Pruebas en <FistApp />", () => {
  test("Debe hacer match con el primer snapshot", () => {
    const title = "Hola Mundo";
    const { container } = render(<FirstApp title="{title}" />);

    expect(container).toMatchSnapshot();
    
  });

  test("Debe hacer match con el primer snapshot", () => {
    const title = "Hola Mundo";
    const subtitle = "BEST REACT DEVELOPER";

    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);
   
    expect( getByTestId('test-title').innerHTML ).toBe(title);
  });
});
