//---------EXERCICIOS DE INTERPRETAÇÃO----------

//1
//A
/* realiza o teste se o resto do numero por 2 é igual a 0.
B.para os numeros que o resto for igual a 0.for true
c. para os numeros que o resto por 2 for diferente de 0 . false*/

//2
//A)Para dar ao usuario sua frut escolhida e o preço
//B) a mensagem impressa no console é--->O preço da fruta maça é R$2,25

/*C)a mesagem impressa no console é-->O preço da fruta pêra é 5. pois a busca pelo 
preço na execução do código terminaria no break após o ultimo preco.*/

//3
/*A) A primeira linha está pedindo a usuario digitar um numero e usamos o comando Number 
para garantir que seja um numero e não uma string.
B)a mesagem para o numero 10 seria "Esse numero passou no teste" 
se fosse -10 não teria mensagem.
C)No escopo if não temos nenhuma mensagem para se for numbero < 0 
então não teria uma mesagem definida para o comando "let mensagem="Essa mensagem é secreta!!!"*/


//-------------EXERCICIO DE ESCRITA DE CÓDIGO-----------------------

//1
// const qualSuaIdade=Number(prompt("Qual a sua idade?"))

// const podeDirigir= qualSuaIdade >= 18
//  if(podeDirigir === true){
//      console.log('Você pode dirigir.')
//  }else if(podeDirigir=== false) {
//  console.log('Você não pode dirigir.')}
 
 //2
 
// const qualOTurnoUsuarioEstuda=prompt(`Qual o turno você estuda?(V)espertino,
//  (M)atutino ou (N)oturno`)
 
//       if (qualOTurnoUsuarioEstuda.toUpperCase() === 'V'){
//         console.log('Bom Dia!!')
//       }else if (qualOTurnoUsuarioEstuda.toUpperCase() === 'M'){
//           console.log('Boa Tarde')
//       }else if (qualOTurnoUsuarioEstuda.toUpperCase() === 'N'){
//           console.log('Boa noite')
//       }else{
//           console.log('Digite uma opção valida')
    //   }

//3    
// const qualOTurnoUsuarioEstuda=prompt(`Qual o turno você estuda?(V)espertino,
//  (M)atutino ou (N)oturno`)

//  switch(qualOTurnoUsuarioEstuda.toUpperCase()){
//      case 'V':
//      console.log('Bom Dia')
//      break
//      case 'M':
//      console.log('Boa Tarde')
//      break
//      case 'N':
//      console.log('Boa Noite')
//      break
//      default:
//          console.log('Digite uma opção valida')

//  }

//4
// const generoDoFilme=prompt("Qual o gênero do filme?")
// const qualOvalorDoIngresso= Number(prompt('Qual o valor do ingresso?'))

// if (generoDoFilme.toUpperCase() === "TERROR" && qualOvalorDoIngresso <= 15){
//     console.log("Escolha outro filme!" && qualOvalorDoIngresso <=15)
// }else if(generoDoFilme.toUpperCase() === "COMEDIA" && qualOvalorDoIngresso <= 15){
//     console.log('Escolha outro filme!')
// }else if(generoDoFilme.toUpperCase()  === "FANTASIA" && qualOvalorDoIngresso <= 15){
//     console.log('Bom Filme!')
// }else{
//     console.log('escolha outro filme')
// }

//----------------DESAFIOOOO---------------
//1
const lanchinho=prompt('Qualo lanchinho você vai comprar pro filme?')

if (console.log(`Bom filme aproveite Seu/sua ${lanchinho}`)){

}

//2

