import { create, defaults } from "lodash";
import { Ship, Player, Gameboard } from "./app"
import { DOM } from "./DOM";
import { createNewGameBtn } from "./DOM";

//once new game btn is clicked, run gameLoop
//create
const gameLoop = () => {
    const createP = (n) => {
        let p = Player(`${n}`);
        return (n) => {
            let gb = Gameboard(n)
            return gb;        
        }
    }

    const createPlayer = (n) => {
        const player = createP(`${n}`);
        let playerGB = player(`${n}`);
        return playerGB
    }

    const createComputer = (n) => {
        const computer = createP(`${n}`);
        let computerGB = computer(`${n}`);
        return computerGB
    }

    const createPlayerShips = (p, n) => {
        p[`${n}`].createShip(5, 'carrier');
        p[`${n}`].createShip(4, 'battleship');
        p[`${n}`].createShip(3, 'destroyer');
        p[`${n}`].createShip(3, 'submarine');
        p[`${n}`].createShip(2, 'patrolBoat');
    }

    //once button is pressed
    const createGameBoards = (p, c) => {
        let playerGB = createPlayer(p);
        let computerGB = createComputer(c);
        // createPlayerShips(playerGB, `${i}`);
        createPlayerShips(playerGB, `${p}`);
        createPlayerShips(computerGB, `${c}`);
        return {playerGB, computerGB}
    }
    // let p = createP('zamir');
    // let returnedP = p();
    // let curryingGB = createP('zamir')();
    return {
        // createPlayer,
        // createComputer,
        createGameBoards
    }
}

const startGame = () => {
    const newGame = gameLoop();
    // let getPlayers = newGame.createGameBoards('zamir');
    let getPlayers = newGame.createGameBoards('player', 'computer');
    const {playerGB, computerGB} = getPlayers;
    // createNewGameBtn();
    console.log(playerGB);
    console.log(computerGB)
    return {playerGB, computerGB};
}

const getCoords = () => {
    //when drage and drop is done, get coords and call
    // const getPlayers = startGame();
    
    
    // console.log(playerGB.zamir.createShip(5, 'carrier'));
}

export {
    gameLoop, 
    // startGame, 
    getCoords,
    startGame
}