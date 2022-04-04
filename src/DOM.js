import gameLoop from "./game";

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

const createNewGameBtn = () => {
    const createDOM = new DOM();
    let btn = createDOM.createElement('button');
    btn.classList.add('new-game-btn');
    btn.textContent = 'New Game';
    btn.addEventListener('click', gameLoop);
    return btn
}
export {
    returnHelloTest, 
    createNewGameBtn,
    DOM
}