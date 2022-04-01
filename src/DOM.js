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

    createElement (type, func) {
        const el = document.createElement(`${type}`);
        return el
    }
}

export {
    returnHelloTest, 
    DOM
}