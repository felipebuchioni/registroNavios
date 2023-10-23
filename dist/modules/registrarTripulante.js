export function registrarTripulante(tripulante, navio) {
    if (navio === undefined) {
        alert('Não encontramos um navio com esse nome. \n Por favor, tente novamente!');
        return;
    }
    else if (navio.crewLimit <= navio.crew.length) {
        alert('Limite de tripulantes atingido!');
        return;
    }
    else if (tripulante === navio.crew[tripulante]) {
        alert('Um membro com esse nome já está na tripulação!');
        return;
    }
    else {
        alert(`${tripulante} foi adicionado aos membros da tribulação do ${navio.name}`);
        navio.crew.push(tripulante);
    }
}
