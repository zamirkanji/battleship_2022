import './style.css';
import { returnHelloTest } from './DOM';


const displayUI = () => {
    returnHelloTest();
}

const App = (() => {
    window.addEventListener('load', displayUI)
})();