import './style.css';
import { returnHelloTest, createNewGameBtn, DOM } from './DOM';
import { Ship, Gameboard, Player } from './app';
import { getCoords, gameLoop, startGame } from './game';


const displayUI = () => {
    // returnHelloTest();
    createNewGameBtn();
    // getCoords();
    test();
}

const test = () => {
    getCoords();
}

const App = (() => {
    window.addEventListener('load', displayUI)
})();