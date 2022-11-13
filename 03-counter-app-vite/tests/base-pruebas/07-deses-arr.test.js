import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("pruebas en 07-deses-arr", () => {
  test("debe de retornar un string y un numero", () => {
    const [letters, numbers] = retornaArreglo(); // ['ABC', 123]
    expect(letters) .toBe('ABC');
    expect(numbers) .toBe(123);
  });
});
