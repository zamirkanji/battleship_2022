import { defaults } from "lodash";
import { Ship, Player, Gameboard } from "./app"
import { DOM } from "./DOM";

//once new game btn is clicked, run gameLoop
//create
const gameLoop = () => {
    const createDOM = () => {
        const htmlDOM = DOM();
    }

    const createPlayer = (name) => {
        const p = Player(`${name}`);
    }
    const createComputer = () => {
        const c = Player('computer');
    }

    const createGB = (n) => {
        let gb = Gameboard(n);
    }

    const createP = (n) => {
        let p = Player(`${n}`);
        return () => {
            let gb = Gameboard(p)
            return gb;        
        }
    }
    

    // let p = createP('zamir');
    // let returnedP = p();
    // let curryingGB = createP('zamir')();

    return {
        createP
    }

}

const startGame = () => {
    const newGame = gameLoop();
    const player = newGame.createP('zamir');
    const computer = newGame.createP('computer');
    return {player, computer}
}

const getCoords = () => {
    //when drage and drop is done, get coords and call
    const getPlayers = startGame();
    const {player, computer} = getPlayers;
    let playerGB = player('zamir');
    let computerGB = computer('computer');
    console.log(playerGB);
}

export {
    gameLoop, 
    startGame, 
    getCoords
}