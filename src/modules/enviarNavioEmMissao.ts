export function enviarNavioEmMissao(navio: {name: string, crew: string[], crewLimit:number, inMission: boolean}) {
    
    if (navio == undefined) {
        alert('Não encontramos um navio com esse nome. \n Por favor, tente novamente!')
        return
    }

    if(navio.inMission) {
        alert(`${navio.name} já está em uma missão!`)
        return 
    
    } else if(navio.crew.length < Math.floor(navio.crewLimit / 3)) {
        alert(`Não foi possível enviar ${navio.name} em missão, número de tripulantes insuficientes!`)
    } else {
        alert(`${navio.name} foi enviado para uma missão!`)
        navio.inMission = true
    }
}