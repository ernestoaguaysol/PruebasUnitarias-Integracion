import { Jugador } from "./clases";

describe('Pruebas de clase', () => {
    
    it('Debe de retornar 80 de hp si recibe 20 de daño', () => {
        
        const jugador = new Jugador();
        const res = jugador.recibeDanio(20);
        
        expect(res).toBe(80);
    });
    
    it('Debe de retornar 50 de hp si recibe 50 de daño', () => {
        
        const jugador = new Jugador();
        const res = jugador.recibeDanio(50);

        expect(res).toBe(50);
    });

    it('Debe de retornar 0 de hp si recibe 100 de daño o mas', () => {
        const jugador = new Jugador();
        const res = jugador.recibeDanio(100);

        expect(res).toBe(0);
    });
});


