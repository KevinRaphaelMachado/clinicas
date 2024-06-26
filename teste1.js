*Adicionar uma nova consulta
Listar todas as consultas
Atualizar uma consulta existente
Cancelar uma consulta*/

const prompt = require("prompt-sync")({ sigint: true });

let consultas = [];

while (true) {
    console.log(`
    //     === Consultas ===
    //     1. Adicionar uma nova consulta
    //     2. Lista de consultas
    //     3. atualizar consultas
    //     4. Cancelar consulta
    //     0. sair
    //     `);




let consultas = prompt('escolha uma opção:');

        if (consultas === "1") {
    let novaConsulta = prompt("Nome do paciente: ");
    let horario = prompt("horario da consulta: ");
    let data = prompt("data: ");
    let medico = prompt("nome do médico")
    
    consultas.push({ novaConsulta, horario, data, medico });
    console.log("Consulta adicionada com sucesso!", consultas);

        } else if (consultas === "2") {
    if (novaConsulta.length === 0) {
    console.log("Suas consultas agendadas são.");
    
        }else if (opcao === "3")
        consultas.push();
        consultas.splice();
        consultas[1] = 4
    } else  {
    alunos.forEach((consultas, index) => {
        console.log(
          `${index + 1}. ${alunos.aluno} - ${alunos.idade} - ${alunos.curso} 
            
          }`
        );
      });
    }
  } else if (opcao === "0") {
    console.log("Saindo do sistema. Até logo!");
    break;
  } else {
    console.log("Opção inválida. Tente novamente.");
    break;
  }
}