import { navios } from "../index.js";
export function registrarNavio(name, capitain, crewLimit) {
    const navio = {
        name: name,
        capitain: capitain,
        crew: [],
        crewLimit: crewLimit,
        inMission: false
    };
    const confirm = window.confirm(`Nome do navio: ${name} \n Capitão: ${capitain} \n Número máximo de tripulantes: ${crewLimit}`);
    if (confirm) {
        navios.push(navio);
        alert(`O navio ${navio.name} foi registrado!`);
    }
    else {
        alert('Retornando ao menu principal!');
        return;
    }
}
