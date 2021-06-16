/*Exercicios de interpretação de código

1
aprensetara a mensagem underfiend pois  o comando "let array" não tem um valor definido


2
apresentara a mengsagem string,pois o null representa valor indefinido.

3
vai apresentar o numero 11 devidoa aplicação do comando length

4
vai apresentar number

5
vai apresentar 19 devido array ser = a 19

6
não vai apresensar nada*/

// Email= prompt("Qual o seu email?")
// Nome= prompt("Qual seu nome?")

// console.log(`O email ${Email} foi cadastrado com sucesso. Seja bem vinda(o) ${Nome}!`)




//Exercicios comidas favoritas


const comidasPreferidas = ["Lasanha","´Pizza","tiramissú","Frango frito com arroz","churrasco"]

console.log(comidasPreferidas)

console.log (`Essas são minhas comidas preferidas: ${comidasPreferidas}

${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]} `)

const comidaUsuario= prompt("Qual sua comida favorita?")
comidasPreferidas[1] = comidaUsuario

console.log(comidasPreferidas)




ListaDeTarefas = [] ;
const Tarefa1 = prompt ("Digite uma de suas tarefas do dia")
const Tarefa2 = prompt("Digite outra tarefa do seu dia")
const Tarefa3 = prompt("Digite mais uma Tarefa do seu dia")

ListaDeTarefas.push(Tarefa1);
ListaDeTarefas.push(Tarefa2);
ListaDeTarefas.push(Tarefa3);

console.log(ListaDeTarefas);

const TiraUma = Number (prompt ("Digite o indice de uma tarefa que você ja realizou:1, 2 ou 3"))
ListaDeTarefas.splice(TiraUma,1)

console.log([ListaDeTarefas-1])

//Desafio-- irei fazer após o horario de entrega

