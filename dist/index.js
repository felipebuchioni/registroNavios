import { findNavio } from "./modules/findNavio.js";
import { registrarTripulante } from "./modules/registrarTripulante.js";
import { registrarNavio } from "./modules/registrarNavio.js";
import { enviarNavioEmMissao } from "./modules/enviarNavioEmMissao.js";
import { listarNavio } from "./modules/listarNavio.js";
import { listarTodosNavios } from "./modules/listarTodosNavios.js";
export let navios = [];
let option = 0;
while (option !== 6) {
    option = Number(prompt('CONTROLE DE NAVIOS!\n\n 1 - Registrar navio. \n 2 - Registrar tripulante em um navio. \n 3 - Enviar navio em missão. \n 4 - Listar navio. \n 5 - Listar todos os navios registrados. \n 6 - Encerrar sessão. \n'));
    switch (option) {
        case 1:
            const name = prompt('Qual o nome do navio?');
            if (name === undefined || name === '') {
                alert('Insira um nome válido! \n Retornando ao menu!');
            }
            else {
                if (findNavio(name)) {
                    alert('Um navio com este nome já foi registrado!');
                }
                else {
                    const captain = prompt(`Qual o nome do capitão que comandará o ${name}?`);
                    if (captain === undefined || captain === '') {
                        alert('Insira um nome válido! \n Retornando ao menu!');
                    }
                    else {
                        const crewLimit = Number(prompt(`Qual será o limite de tripulantes do ${name}?`));
                        if (crewLimit === undefined || crewLimit === null || crewLimit === 0) {
                            alert('Insira um número válido! \n Retornando ao menu!');
                        }
                        else {
                            registrarNavio(name, captain, crewLimit);
                        }
                    }
                }
            }
            break;
        case 2:
            const novoTripulante = prompt('Qual o nome do tripulante?');
            if (novoTripulante === '' || novoTripulante === undefined) {
                alert('Insira um nome válido! \n Retornando ao menu!');
            }
            else {
                const nomeNavioTripulante = prompt(`Em qual navio ${novoTripulante} fará parte?`);
                if (nomeNavioTripulante === '' || nomeNavioTripulante === undefined) {
                    alert('Insira um nome válido! \n Retornando ao menu!');
                }
                else {
                    registrarTripulante(novoTripulante, findNavio(nomeNavioTripulante));
                }
            }
            break;
        case 3:
            const nomeNavioMissao = prompt('Qual o nome do navio que sairá em missão?');
            if (nomeNavioMissao === '' || nomeNavioMissao === undefined) {
                alert('Insira um nome válido! \n Retornando ao menu!');
            }
            else {
                enviarNavioEmMissao(findNavio(nomeNavioMissao));
            }
            break;
        case 4:
            const listNavioName = prompt('Qual o nome do navio que deseja se informar?');
            listarNavio(findNavio(listNavioName));
            break;
        case 5:
            listarTodosNavios(navios);
            break;
        case 6:
            alert('Encerrando sessão!');
            break;
        default:
            alert('Opção inválida!');
            break;
    }
}
