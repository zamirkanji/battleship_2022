const { TestWatcher } = require("jest");
import { Ship } from '../src/app';

test('test return object of ship', () => {
    let carrier = Ship(5, ['A1', 6], false);
    expect(
        carrier()
    ).toMatchObject({
        
    })
})