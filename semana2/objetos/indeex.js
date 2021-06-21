//--------EXERCICIOS DE INTERPRETAÇÃO-------

/* A primeira impressão no console seria--Matheus Nachtergaele,
A segunda impressão no console seria--o numero de eleentos do array -1
A terceira impressão no console seria--Globo horario:14h*/

//------EXERCICIO 2-----

/*
a- O que vai ser impresso no console?
vai ser impresso 

na do cachorro
nome: "Juca",  
idade: 3, 
raca: "SRD"

na do gato
nome: "Juba", 
idade: 3, 
raca: "SRD"

Na da tartaruga
nome: "Jubo", 
idade: 3, 
raca: "SRD"

B- o que faz o sintaxe dos três pontos antes do nome do um objeto?
a sintaxe dos três pontos significa que está copiando as informações do objeto sitado.*/

//-------EXERCICIO TRÊS--------

//no console será impresso false e underfind

//creio que este valor foi impresso no console pois o backender está com o valor false
// e não existe a gaveta altura no objeto pessoa dai apresenta underfind


//-------EXERCICIOS DE ESCRITA DO CÓDIGO--------

// const pessoa= {
//     nome: 'Doglas',
//     apelidos: ['Dodô','Dog','Viegas']

// }
// // console.log(`Eu sou ${pessoa.nome}, mas pode me charmar de:${pessoa.apelidos[0]},
// //  ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)

// //Exercicio B

// const novoapelido = {...pessoa, apelidos: ['Dô','Dogson','Pai da sereia']}

// console.log(pessoa)
// console.log(novoapelido)



//--------EXERCICIO NUMERO 2----------

//A
const objeto1={
    nome:'Doglas',
    idade: 23,
    profissao:'Maitre'
}
const objeto2={
    nome:'Stefani',
    idade:24,
    profissao:'cabalereira'

}
function newArray(mostrar){

return[ mostrar.nome, 
    mostrar.nome.length, 
    mostrar.idade,
    mostrar.profissao, 
    mostrar.profissao.length, 
]    
}
console.log(newArray(objeto1))
console.log(newArray(objeto2))

//------------Exercicio Três-----------

let carrinho=[] 
const fruta1={
    nome:"bergamota",
    disponibilidade: true
}
const fruta2={
    nome:"laranja",
    disponibilidade: true
}
const fruta3={
    nome:'bananinha',
    disponibilidade:true
}

function recebaObjeto(posição0,posição1,posição2){
    carrinho.push(posição0,posição1,posição2)
}
recebaObjeto(fruta1, fruta2, fruta3)
console.log(carrinho)

//------------DESAFIO-------

