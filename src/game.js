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

    const createP = (n) => {
        let p = Player(`${n}`);
        return () => {
            let gb = Gameboard(p)
            return gb;        
        }
    }
    let p = createP('zamir');
    console.log(p);
    let returnedP = p()
    let curryingGB = createP('zamir')()

}

export default gameLoop