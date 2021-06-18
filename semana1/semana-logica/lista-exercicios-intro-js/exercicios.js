// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  
  const altura = Number(prompt("digite a altura"))
  const Largura= Number(prompt('digite a largura'))
  
  console.log(altura * Largura)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual= Number(prompt('Digite o ano atual'))
  const nascimento= Number(prompt('Digite o ano em que nasceu'))
  console.log(anoAtual - nascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
   return peso / (altura * altura)

}
calculaIMC(85, 1,8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome= prompt("Escreva seu nome")
  const idade= prompt('Escreva sua idade')
  const email= prompt('Escreva seu email')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1= prompt('Uma de suas Cores favorita')
  const cor2= prompt('outa cor favorita')
  const cor3= prompt('só mais uma')

  console.log([cor1, cor2, cor3])


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
   
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1 > string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array.shift()

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
      return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
   const troca = array[0]
   array[0] = array[array.length-1]
   array[array.length-1] = troca
   return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const maisculo1 = string1.toUpperCase()
  const maisculo2 = string2.toUpperCase()    


       return maisculo1 === maisculo2
       }

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual= Number(prompt('Qual o ano Atual?'))
  const anoDeNascimento=  Number(prompt('Em que ano você nasceu?'))
  const anoDaCarteira= Number(prompt('Ano da ID'))

  const idade = anoAtual - anoDeNascimento 
  const vencimento = anoAtual - anoDaCarteira
  //Renovação

const vinte=idade <= 20 && vencimento >= 5
const diferença=idade > 20 && idade <= 50 && vencimento >= 10
const idoso = idade > 50 && vencimento >= 15


console.log(vinte || diferença || idoso)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica
//O operador OR lógico ( || ) retornará o valor booliano true 
//se um ou ambos os operandos for true e retornar de false outra forma
const var1= ano % 400 === 0
const var2= ano % 4 ===0 && !(ano % 100===0 && !var1)
return var1 || var2

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
 // implemente sua lógica aqui
const maiorDeDezoito = prompt('tem mais de 18?')
const ensino = prompt('Você ja terminou o enino médio?')
const horario = prompt ('Você tem disponibilidade de excluisa para o curso?')
const verdade = maiorDeDezoito.includes('sim') && ensino.includes('sim') && horario.includes('sim')
console.log(verdade)
}