import {Ship} from '../src/app';

test('test return object of ship', () => {
    let carrier = Ship(5, 'A1');
    // console.log(carrier);
    expect(
        carrier
    ).toMatchObject({
        length: 5, hit: { hit: [ ["A1"] ] }, isSunk: true 
    })
})