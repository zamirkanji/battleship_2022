import './style.css';
import { returnHelloTest, createNewGameBtn, DOM, createGrid, newGameBtnEvent } from './DOM';
import { Ship, Gameboard, Player } from './app';
import { getCoords, gameLoop, startGame } from './game';


const displayUI = () => {
    // createGrid('playerBoard');
    // createGrid('computerBoard');
    test();
}

const test = () => {
    newGameBtnEvent();
    
}

const App = (() => {
    window.addEventListener('load', displayUI);
    // document.querySelector('new-game-btn').addEventListener(test);
})();