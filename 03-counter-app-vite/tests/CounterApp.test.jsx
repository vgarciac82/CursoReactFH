import { fireEvent, getByRole, render } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas al counter App", () => {
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el valor inicial de 100", () => {
    const val = 100;
    const { container, getByText } = render(<CounterApp value={val} />);
    expect(getByText(val)).toBeTruthy();
  });

  test("Debe incrementar con el boton de +1", () => {
    const val = 100;
    const { container, getByText } = render(<CounterApp value={val} />);

    fireEvent.click(getByText("+1"));

    expect(getByText("101")).toBeTruthy();
  });

  test("Debe decrementar con el boton de -1", () => {
    const val = 100;
    const { container, getByText } = render(<CounterApp value={val} />);

    fireEvent.click(getByText("-1"));

    expect(getByText("99")).toBeTruthy();
  });

  test("Debe funcionar   el boton de Reset", () => {
    const val = 100;
    const { container, getByText, getByRole } = render(<CounterApp value={val} />);

    fireEvent.click(getByText("-1"));
    fireEvent.click(getByText("-1"));
    fireEvent.click(getByText("-1"));

    //fireEvent.click(getByText("Reset"));
    fireEvent.click(getByRole('button', { name: 'btn-reset' }));

    expect(getByText("100")).toBeTruthy();
  });
  
});
