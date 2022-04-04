const Ship = (length) => {
    //depending on where the ship was dragged and dropped, the length - get coordinates and return them
    //call DOM and place ship at specific coordinate
    const positions = (coords) => {
        //ship.name 
        //ship.length
        let shipCoords = [coords];
        return shipCoords;
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
        positions,
        shipHit,
        sunk
    }
}





const Gameboard = (playerType) => {
    //depending on players turn, and what size ship they pick, where they place it, 
    //call Ship factory and insert coordinates
    // call ship factor
    //ship.hit() is called when not a miss
    let ships = {};

    const createShip = (length, name) => {
        ships[`${name}`] = Ship(length);
        return ships;
    }

    //all ships created and where they are at on the board, call ship factory function
    const placeShips = (name, length, coords, player) => {
        ships[`${player}`] = Ship(length)
        //calls ship.coords function for each ship

        //will need to return coordinates of whoevers turn it is (which players board is getting hit)
       
    }

    function getKeyByValue(object, value) {
        //creates array of all keys in returned object, finds value matching key, and returns that key
        return Object.keys(object).find(key => object[key] === value);
    }

    //if coordinates matches where the ship has been hit, mark as HIT
    //check which type of ship has been hit
    const receiveAttack = (x, y) => {
        //this function is called when user clicks on canvas, checks the coordinates (Ex. A1, C6) 
        //and checks whether or not A SINGLE ship has been hit (place ships function will return this)
        //checks key of object where coord is and calls that objects HIT func
        //if miss, places miss marker on canvas 
        let coords = [`${x}${y}`];
        let pos = placeShips();
        let shipKeyReturned = getKeyByValue(pos, coords);
        if (shipKeyReturned === undefined) {
            //missed attack
        } else {
            //hit
        }
    }

    //if coordinates do not match where a ship is placed, place missed marker
    //placeShips() returns object of all placed ships
    //when missedAttacks is called, find() in object for ANY matches
    const missedAttacks = () => {
        return {

        }
    }

    //if check placeShips object, if ALL markers have been hit, all ships are sunk
    const allShipsSunk = () => {
        //object of hits matches object of either player or computer placed ship coords 
        return 
    }

    return {
        [`${playerType}`]: {
            placeShips, 
            receiveAttack,
            missedAttacks, 
            allShipsSunk
        }   
    }
}

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