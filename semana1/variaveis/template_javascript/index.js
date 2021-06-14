//a primeira interpretação ficaria 10 05//

//a segunda interpretação fica 20   10//

//sugiru usar let Horas e let Dia, que assim fica mais visivel com oque estamos trabalhando na escala de trabalho//

let nome;
let idade;

console.log(typeof idade,typeof idade)

//foi impresso o tipo underfined, ela não teve um valor atribuido dai apresenta este tipo de variavel//

nome = prompt ("Qual o seu nome?")
idade = prompt ("qual sua idade?")

console.log(nome, idade)
console.log(typeof nome,typeof idade)
// me imprimiu string para ambos, pois eles possuem texto

console.log("olá!",nome,"sua idade é",idade,"anos")

let tempo;
let gostos;
let saude;

tempo = prompt ("Está chovendo hoje?")
gostos = prompt ("Você gosta de chocolate?")
saude = prompt ("Você ja se vacinou?")

console.log("Está chovendo hoje?",tempo )
console.log("Você gosta de chocolate?", gostos)
console.log("Você ja se vacinou?",saude)

let a =10
let b =25
let c =0
 
c=a
a=b
b=c

console.log("valor de a",a)
console.log("valor de b", b) 

let idadedesafio
let desafio 

idadedesafio = Number (prompt("Um numero qualquer de 1 a 100!"))
desafio = Number (prompt("agora multiplique por 2"))

let soma = idadedesafio + desafio

let multiplica = idadedesafio * desafio

console.log ("a soma dos números é igual a:",soma)

console.log("a multiplicação dos números é:" ,multiplica)