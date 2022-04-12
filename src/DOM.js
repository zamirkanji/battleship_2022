import {gameLoop, startGame} from "./game";

const returnHelloTest = () => {
    const app = document.querySelector('#app');
    const h1 = document.createElement('h1');
    h1.textContent = 'Battleship';
    return app.appendChild(h1);
}

class DOM {
    constructor(type, name) {

    }

    eventListener (selector, type, func) {
        const s = document.querySelector(`${selector}`);
        s.addEventListener(`${type}`, func);
    }

    createElement (type) {
        const el = document.createElement(`${type}`);
        return el
    }
}

const createGrid = (b) => {
    //create elements
    const board = document.getElementById(`${b}`);
    const table = document.createElement('table');

    for (let i = 0; i < 10; i++) {
        let row = document.createElement('tr');
        row.classList.add('board-row');
        for (let j = 0; j < 10; j++) {
            //if row index matches row - 
            let box = document.createElement('td');
            box.dataset.x = j;
            box.dataset.y = i;
            box.classList.add('grid-box'); 
            row.appendChild(box);  
        }
        table.appendChild(row);
    }
    board.appendChild(table);
}

// const createPlayerBoard = () => {
//     let player = document.getElementById('playerBoard');
//     createGrid(player);
// }

const createNewGameBtn = () => {
    const createDOM = new DOM();
    let btn = createDOM.createElement('button');
    btn.classList.add('new-game-btn');
    btn.textContent = 'New Game';
    btn.addEventListener('click', gameLoop);
    return btn
}

const newGameBtnEvent = () => {
    return document.querySelector('#new-game-btn').addEventListener('click', (e) => {
        e.preventDefault();
        createGrid('playerBoard');
        createGrid('computerBoard');
        showPlayerBoard();
        createShipsInDOM();
    })
}

const showPlayerBoard = () => {
    document.querySelector('#playerContainer').classList.remove('display');
}

const showConputerBoard = () => {
    document.querySelector('#computerContainer').classList.remove('display');
}

const createShipsInDOM = () => {
    let game = startGame();
    let {computerGB, playerGB} = game;
    const playerShips = playerGB.player.ships;
    const computerShips = computerGB.computer.ships;
    console.log(Object.keys(playerShips));
    for (let i = 0; i < Object.keys(playerShips).length; i++) {
        document.createElement('div');
    }
}


export {
    returnHelloTest, 
    createNewGameBtn,
    DOM,
    createGrid,
    newGameBtnEvent
}