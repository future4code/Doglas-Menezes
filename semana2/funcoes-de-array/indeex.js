//Exercícios de interpretação de código
/*1-a) Vai ser impresso a  lista de usuario com todas suas carracterísticas

2-a) Vai ser impresso no console um novo array de nomes que estão na lista de usuarios.

3-a) Vai ser impresso no console o array original menos o item chijo por causa do !==.*/




//----------------Exercícios de escrita de código--------------------------------------

// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]

//Apenas nome dos doguinho

// const soNomesDosDoguinho= pets.map((cachorro) => {
// return cachorro.nome
// })
// console.log(soNomesDosDoguinho)

///---------somente os Salsichas

// const soOsSalcichas = pets.filter((tipoDeRaca) => {
//   return tipoDeRaca.raca === "Salsicha" //true
// })

// console.log(soOsSalcichas)

//----------Cupom para os donos de poodle
// const somentePoodle = pets.filter((donos) => donos.raca === "Poodle")

// const NomeDogs= somentePoodle.map((cupom) =>{
// //  return cupom.nome
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a  ${cupom.nome}`)
// })



//-------------Exercicio de escrita numero 02----------

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


//----------Nome de cada item------
// const somenteNomeDeProdutos= produtos.map((mercado) => {
//  return mercado.nome
//  })
// console.log(somenteNomeDeProdutos)

//---------- 5% de desconto------------
// const DescontoPorNome= produtos.map((produto)=> ({
//   nome: produto.nome,
//   preco:produto.preco * 0.95,
// }));
// console.log(DescontoPorNome)

//----------Apenas os da categoria bebida-----------

// const somenteBebidas = produtos.filter((redefinido) =>{
//  return redefinido.categoria === 'Bebidas'

// })
// console.log(somenteBebidas)

//-------Somente ypê-------
// const somenteYpe = produtos.filter((redefinido)=>{
//   return redefinido.nome.includes('Ypê')
// })
// console.log(somenteYpe)

//---------------contendo ypê----------
// const somenteYpe = produtos.filter((redefinido)=>{
//   return redefinido.nome.includes('Ypê')
// })

// const novoArray= somenteYpe.map((cupom) =>{

// console.log(`Compre ${cupom.nome} Por ${cupom.preco}`)
// })

