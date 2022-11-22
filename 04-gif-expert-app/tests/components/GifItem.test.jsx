import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Prueba en <GifItem/>", () => {
  const title = "Saitama";
  const url = "https://media.giphy.com/media/3o7TKsQ8gqVrXwXWqM/giphy.gif";

  test("Debe mostrar match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen con el IURL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);

    // expect( screen.getByRole("img").src ).toBe(url);
    // expect( screen.getByRole("img").alt ).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe mostrar el titulo", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
