import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en el archivo 02-template-string.js', () => {
    
    test('Get Saludo debe devolver Hola CHerlux ', () => {
            
            const nombre = 'CHerlux';
            
            const saludo = getSaludo(nombre);
            
            expect( saludo ).toBe( 'Hola ' + nombre );
                    
    });
});