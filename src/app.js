const Ship = (length, hit, coords = undefined) => {

    // const getLength = () => length.length;

    //depending on where the ship was dragged and dropped, the length - get coordinates and return them
    //call DOM and place ship at specific coordinate
    const positions = () => {
        return {
            shipCoords: coords
        }
    }

    //where the ship has been hit (positiions)
    //call on DOM, place hit marker
    //if ship has been hit on either player or comp, they get to take another turn 
    const shipHit = () => {
        let positionsHit = [];
        positionsHit.push(hit);
        return {
            hit: [positionsHit]
        }
    }
    //if all positions of one battleship are hit, then ship isSunk return (true)
    const sunk = () => {
        let hits = shipHit();
        let isSunk = (length % hits.hit.length) === 0 ? true : false;
        return isSunk
    }
    return {
        length,
        hit: shipHit(),
        isSunk: sunk()
    }
    // return {getLength, shipHit, isSunk}
}

const Gameboard = (coords) => {
    //depending on players turn, and what size ship they pick, where they place it, 
    //call Ship factory and insert coordinates
    // call ship factor
    //ship.hit() is called when not a miss


    //all ships created and where they are at on the board, call ship factory function
    const placeShips = (length, name, coords, player) => {
        //test, example sizes
        let carrier = Ship(5, );
        let battleship = Ship(4, );
        let destroyer = Ship(3, );
        let submarine = Ship(3, );
        let patrolBoat = Ship(2, );

        return {

        }
    }

    //if coordinates do not match where a ship is placed, place missed marker
    //placeShips() returns object of all placed ships
    //when missedAttacks is called, find() in object for ANY matches
    const missedAttacks = () => {

    }

    //if coordinates matches where the ship has been hit, mark as HIT
    //check which type of ship has been hit
    const receiveAttack = (x, y) => {
        //this function is called when user clicks on canvas, checks the coordinates (Ex. A1, C6) 
        //and checks whether or not A SINGLE ship has been hit (place ships function will return this)
        //checks key of object where coord is and calls that objects HIT func
        //if miss, places miss marker on canvas 
        
    }

    //if check placeShips object, if ALL markers have been hit, all ships are sunk
    const allShipsSunk = () => {

    }

    return {

    }
}

//player, computer
// class Player {
//     constructor(name) {
//         this.name = name
//     }
// }

function Player (name) {
    const playerTurns = (player, comp) => {
        
    }
    return {name}
}

export {
    Ship, 
    Gameboard, 
    Player
}