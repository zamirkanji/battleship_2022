import { Gameboard, Ship } from "../src/app";

test('call gameboard, place ship', () => {
    let gb = Gameboard();
    expect(gb.placeShips(
        // carrier.coords(['A1', 'A2', 'A3', 'A4', 'A5'], )
        'carrier', 5, ['A1', 'A2', 'A3', 'A4', 'A5'], 'player'
    )).toMatchObject()
})