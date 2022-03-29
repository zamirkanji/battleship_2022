import './style.css';
import { returnHelloTest } from './DOM';
import { Ship, Gameboard, Player } from './app';


const displayUI = () => {
    returnHelloTest();
}

const App = (() => {
    window.addEventListener('load', displayUI)
})();