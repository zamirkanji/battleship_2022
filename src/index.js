import './style.css';
import { returnHelloTest, createNewGameBtn, DOM } from './DOM';
import { Ship, Gameboard, Player } from './app';
import gameLoop from './game';


const displayUI = () => {
    returnHelloTest();
    createNewGameBtn();
}

const App = (() => {
    window.addEventListener('load', displayUI)
})();