import { create, defaults } from "lodash";
import { Ship, Player, Gameboard } from "./app"
import { DOM } from "./DOM";

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

    const createPlayer = () => {
        const player = createP('zamir');
        let playerGB = player('zamir');
        return playerGB
    }

    const createComputer = () => {
        const computer = createP('computer');
        let computerGB = computer('computer');
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
    const createGameBoards = (i) => {
        let playerGB = createPlayer();
        let computerGB = createComputer();
        createPlayerShips(playerGB, `${i}`);
        createPlayerShips(computerGB, 'computer');
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
    let getPlayers = newGame.createGameBoards('zamir');
    const {playerGB, computerGB} = getPlayers;

    console.log(playerGB);
    console.log(computerGB);
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