export function listarNavio(navio: {name: string, capitain: string, crew: string[], inMission: boolean}) {
    if (navio) {
        let list = ''
        let mission = ''

        for(let i = 0; i < navio.crew.length; i++) {
            list += `\n - ${navio.crew[i]}`
        }

        if (navio) {
            if(navio.inMission) {
                mission = 'O navio está em missão!'
            } else {
                mission = 'O navio não está em missão!'
            }
    
            alert(`${navio.name}\n\n
                   Capitão: ${navio.capitain}
                   \n Tripulantes: ${list}
                    \n ${mission}`)
        }
        } else {
            alert('Não encontramos um navio com este nome.\n Por favor, tente novamente!')
        }

        
}