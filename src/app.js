const Ship = (length, coord, isSunk) => {
    const getLength = () => length;

    const hit = () => {}
    const isSunk = () => {}
    return{
        getLength,
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