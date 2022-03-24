const Ship = (length, coord, isSunk) => {
    const getLength = () => length;

    const hit = () => {}
    const isSunk = () => {}
    return{
        getLength,
    }
}

const Gameboard = () => {
    return {}
}

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