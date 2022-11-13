import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUsuario activo debe retornar un objeto.", () => {
    const nombre = "CHerlux";

    const user = getUsuarioActivo(nombre);

  

    expect(user).toStrictEqual({
        uid: "ABC567",
        username: nombre,
      });
  });
});
