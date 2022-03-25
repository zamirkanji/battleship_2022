const Ship = (length, coord, isSunk) => {

    const getLength = () => length.length;

    //where the ship has been hit (positiions)
    const hit = () => {

    }
    //if all positions of one battleship are hit, then ship isSunk return (true)
    const isSunk = () => {

    }
    return{
        length: getLength,
        hit: false,

    }
}

const Gameboard = (coords) => {

    
    //depending on players turn, and what size ship they pick, where they place it, 
    //call Ship factory and insert coordinates
    // call ship factor

    const receiveAttack = (coords) => {}
    return {}
}


//will run through either player using a loop
class Player {
    constructor(name) {
        this.name = name
    }
}

export {
    Ship, 
    Gameboard, 
    Player
}