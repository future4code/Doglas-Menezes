//--------INTERPRETAÇÃO DE CÓDIGOS----------
//1-a)
//vai ser impresso 10
//vai ser impresso 50

//B)executaria as ordens, mas não aparececia nada



//2-a)serve para fazer uma pergunta ao usuario botando a resposta toda em minusculo e procurando se tem a palavra
//cenoura retornando true or false.


//b)1. eu gosto de cenoura.-true
//2. cenoura é bom para vista.-true
//3. cenouras crescem na terra.-true


//------------------EXERCICIOS DE CÓDIGO--------------

//A
// function mensagem(){
//     console.log("Eu sou Doglas,tenho 23 anos, moro em Porto Alegre e sou estudante")
// }

// mensagem()

//B
// function informacoes(Nome, idade, cidade , profissao){
//     console.log(`meu nome é ${Nome},minha idade é ${idade}, moro em ${cidade} e quero trabalhar como ${profissao}`)
// }

// informacoes("Doglas",23, "Porto alegre", "DevFrontEnd")



//----------EXERCICIO 2----------

//A
// function DoisNumeros(numero1, numero2){
//     const soma= numero1 + numero2
//     const resultado = soma
//     return resultado

// }

// const impressao= DoisNumeros(6, 4)
// console.log(impressao)

//B
// function Retorna(Numero1, numero2){
//     const maior= Numero1 >= numero2
//     console.log(`O primeiro numero é igual maior ou igual ao segundo? ${maior}`)
// }

// Retorna(8, 8)

//C
// function parOuimpar(Numero1){
//     const Resposta = Numero1 % 2 == 0 ;
//     console.log(`O numero é par? ${Resposta}`)
//     }


// parOuimpar(6)

//D
// function mensagem(Texto){
//     console.log(`Nesta frase tenho ${Texto.length} carcters`)
//     console.log(Texto.toUpperCase())
// }
// mensagem("eu sou o doglas você não é o doglas")

//--------EXERCICIO 3-----
// function pergunta(){
//     const Nmr1= prompt("Escolha um numero")
//     const Nmr2= prompt("Escolha outro")
//     console.log(`Numeros inseridos ${Nmr1} e ${Nmr2}`)
//     const Soma1 =Nmr1 + Nmr2
//     const substração2 = Nmr1 - Nmr2
//     const multiplicação3 = Nmr1 *Nmr2
//     const divisao4 = Nmr1 / Nmr2
//     console.log(`Soma:${Soma1}`)
//     console.log(`Subtração:${substração2}`)
//     console.log(`Multiplicação${multiplicação3}`)
//     console.log(`Divisão:${divisao4}`)
// }
// pergunta()


//------------------DESAFIO----------------

// function funcaoparametro(parametro){
//     console.log(parametro)

//     }
//     //Função parametro
//     function funcaoparametro2( parametros1 , parametros2){
//         const soma = parametros1 + parametros2
//         funcaoparametro(soma)
        
//     }

// funcaoparametro2(2, 5)


//------PITAGORAS-------
// usar math.sqrt- Matemática . sqrt (double a)
//retorna a raiz quadrada positiva corretamente arredondada de um valor duplo

function pitagoras( cateto1 , cateto2 ){
    const somaDosCatetos=(cateto1 * cateto1) + (cateto2 * cateto2)
    return Math.sqrt(somaDosCatetos)
}
console.log(pitagoras(3, 5))
