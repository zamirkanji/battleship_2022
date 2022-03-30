const Ship = (name, length) => {

    // const getLength = () => length.length;

    //depending on where the ship was dragged and dropped, the length - get coordinates and return them
    //call DOM and place ship at specific coordinate
    const positions = (ship, coords) => {
        //ship.name 
        //ship.length
        return {
            shipCoords: coords
        }
    }

    //where the ship has been hit (positiions)
    //call on DOM, place hit marker
    //if ship has been hit on either player or comp, they get to take another turn 
    const shipHit = (hit) => {
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
        coords: positions(),
        hit: shipHit(),
        isSunk: sunk()
    }
    // return {getLength, shipHit, isSunk}
}

const Gameboard = (player) => {
    //depending on players turn, and what size ship they pick, where they place it, 
    //call Ship factory and insert coordinates
    // call ship factor
    //ship.hit() is called when not a miss

    //test, example sizes
    // let carrier = Ship('carrier', 5);
    // let battleship = Ship(4, );
    // let destroyer = Ship(3, );
    // let submarine = Ship(3, );
    // let patrolBoat = Ship(2, );
    let playerShips = {}
    let computerShips = {}


    //all ships created and where they are at on the board, call ship factory function
    const placeShips = (name, length, coords, player) => {
        if (player === 'player') {
            playerShips[`${name}`] = {length, coords};
        }
        if (player === 'computer') {
            computerShips[`${name}`] = {length, coords};
        }
        console.log(playerShips);
        //calls ship.coords function for each ship
        return {}
    }

    //if coordinates matches where the ship has been hit, mark as HIT
    //check which type of ship has been hit
    const receiveAttack = (x, y) => {
        //this function is called when user clicks on canvas, checks the coordinates (Ex. A1, C6) 
        //and checks whether or not A SINGLE ship has been hit (place ships function will return this)
        //checks key of object where coord is and calls that objects HIT func
        //if miss, places miss marker on canvas 
        let coords = [`${x}${y}`];

    }

    //if coordinates do not match where a ship is placed, place missed marker
    //placeShips() returns object of all placed ships
    //when missedAttacks is called, find() in object for ANY matches
    const missedAttacks = () => {

    }

    //if check placeShips object, if ALL markers have been hit, all ships are sunk
    const allShipsSunk = () => {

    }

    return {
        placeShips
    }
}

//player, computer
// class Player {
//     constructor(name) {
//         this.name = name
//     }
// }


//each player creates gameboard
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