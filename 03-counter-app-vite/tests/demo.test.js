describe("Pruebas en <Demo />", () => {
  test("Esta prueba no debe de fallar", () => {
    const message = "Hola Mundow";
    const message2 = `Hola Mundo`;
    expect(message).toBe(message2);
  });
});
