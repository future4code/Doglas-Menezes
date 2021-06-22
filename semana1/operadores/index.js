// /*Exercicio de interpretação 1

// mensagem 1 seria a:false, pois o bool1 é true e o bool2 é false, sendo assim usando a junção && sempre o false que
// predomina.

// mesagem 2 seria: b:false, pois usando a junção temos o false predominante mesmo que seja "True && false && true".

// mensagem 3 seria c:True, pois dentro de parênteses() temos um ||=ou que predomina o true e temos uma negação
// do resultado anterior representado com ! que era false e se tranforma em true.

// mensagem 4 seria d: Booleano pois só apresenta um tipo de variação true or false

//                      Exercicio 2

// falarei pro colega que com o formato que ele esta usando, o sistema entende como palavras ele teria que usar Number
// antes do prompt, o prompt dentro de parênteses() para ele executar a pergunta correta e ficaria
// let exemplo=number(prompt("pergunta que seria feita?"))

// Exrcicio 3
// sugiro que ele utilize o number---> let exemplo = number(prompt("pergunta que seria feita"))
//                                     let exemplo2 = number(prompt("segudna pergutna feita"))
//                                     const soma = exemplo + exemplo2
//                                     console.log(Soma) */

//                 //exercicio de escrita//
//1- faça um programa que peça a idade do usuario e do seu amigo//
let idadeDoUsuario = prompt("Qual a sua idade?")
let idadeDoAmigo = prompt("Qual idade do seu melhor amigo?")

console.log ("sua idade é maior do que a do seu amigo?", idadeDoUsuario >= idadeDoAmigo)

console.log (Number( idadeDoUsuario - idadeDoAmigo))

//2-faça um programa que//

let numeroPar = prompt("Insira um número par!")

console.log ("O reste desde numero divido por 2 é:",(numeroPar / 2 ))

// // //C:o padrão de resultados é o numero sempre divisivel por ele mesmo.//
// // //D: ele apresenta numeros com virgula//

// // //Exercixio 3 idade do usuario e conversões//

const idadeDouUsuario2 = prompt("Qual sua idade?")

console.log ("sua idade em anos é:", idadeDouUsuario2 * 12)
console.log ("sua idade em dias é:", idadeDouUsuario2 * 365)
console.log ("Sua idade em horas é:", idadeDouUsuario2 * 24 * 365)

// // //Exercicio 4 faça um programa que pergunte aos usuários dois números.//

const NumeroUsuario = prompt("Digite um numero")
const NumoerUsuario2 = prompt("Digite outro numero")

console.log ("O primeiro numero é maior que o segundo?",NumeroUsuario > NumoerUsuario2)
console.log("O primeiro numero é igual ao segundo?",NumeroUsuario === NumoerUsuario2)
console.log("O primeiro numero é divisivel pelo segundo",NumeroUsuario % NumoerUsuario2===0)
console.log("O segundo numero é divisivel pelo primeiro",NumoerUsuario2 % NumeroUsuario===0)


              //DESAFIO//

//A
const kelvin = (77-32)*(5/9)+ 273.15
console.log (kelvin)

//B
const GrausCelcius = (80)*(9/5)+32
console.log (GrausCelcius)

//c
const GrauFk =(30)*(9/5)+32
const Fk = (86-32)*(5/9)+273.15 
console.log (GrauFk , Fk)

//d
const atribuaC = prompt("Insira um valor em celsius")
let resultadoF =(atribuaC)*(9/5)+32
let Resultadok =(resultadoF-32)*(5/9)+273.15

console.log ("Seu resultado em Fahrenheit é:",resultadoF)
console.log ("Seu resultado em Kelvin é:",Resultadok)

// Desafio 2//

const ValorQLOWAThora = 0.5

const consumo = Number(prompt("qual foi o consumo em Quilowatt-hora?"))
const desconto = Number(prompt("qunal é a porcetagem de desconto?"))

const Tconsumo = consumo * ValorQLOWAThora
const PorcentDesconto = (100-desconto) / 100

console.log(Tconsumo*PorcentDesconto)