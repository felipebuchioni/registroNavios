export function listarTodosNavios(navios: [navio: {name: string, capitain:string, crew: string[], inMission: boolean }] | any) {
    let listNavios = 'Navios registrados: \n'

    navios.forEach((navio) => {
        listNavios += `Navio: ${navio.name}
                 Capitão: ${navio.capitain}
                 O navio ${navio.inMission ? 'se encontra em missão!' : 'não se encontra missão!'}
                 Tripulantes: \n`

                 navio.crew.forEach(member => {
                    listNavios += `  - ${member}\n`
                 })
    })

    alert(listNavios)
}
// let listaTripulantes = navios.forEach(navio => navio.crew)
// let listaNavios = navios.forEach(navio => `\n
// ${navio.name}\n
// Capitão: ${navio.captain}
// Tripulação:\n
//             `)
// alert(``)