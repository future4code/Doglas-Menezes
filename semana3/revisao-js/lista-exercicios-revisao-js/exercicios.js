// EXERCÍCIO 01

function inverteArray(array) {
  const arrayVazio=[]
for ( let i = array.length -1 ; i >= 0; i-- ){
  arrayVazio.push(array[i])
  }
return arrayVazio
  }



// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
const nParesElevadoDois=[]
    for (let i=0; i< array.length; i++ ){
      if(array[i] % 2 ===0){
       nParesElevadoDois.push(array[i]**2)
      }
    }return nParesElevadoDois
    
  }


// EXERCÍCIO 03

function retornaNumerosPares(array) {
let numeroPares=[]
for (let i=0; i <array.length; i ++){
  if( array[i] %2 ===0){
    numeroPares.push(array[i])
  }
 } return numeroPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

let maior=-Infinity 
 for(let i=0; i <array.length; i++){
   if(array[i] > maior){
     maior= array[i]
  }
 }return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
const respostas= [false,false,true,true,true];
return respostas;
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  if(a!== b && c !== a){
    return 'Escaleno'
  // return 'Equilátero'
  }else if(a===b && a===c && b===c){
    return 'Equilátero'
  // return 'Isósceles'
  }else{
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
