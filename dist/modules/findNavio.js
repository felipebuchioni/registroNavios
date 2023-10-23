import { navios } from "../index.js";
export function findNavio(name) {
    let navio;
    navio = navios.find((ship) => {
        return ship.name === name;
    });
    return navio;
}
