//Exercícios de interpretação de código
/*
1)o valor impresso no console será 10
2)A-no console será impresso todos os numeros maiores do que 18.
B-Sim seria o suficiente apenas botando if(numero>0) no lugar de if (numero>18).

3)seria impressa 4 linhas crescentes pois a quantidade atual +1  com asteriscos.*/

//-------Exercícios de escrita de código-------

// const petsNumber=(Number(prompt("Quantos pets você tem?")))
// let answer = petsNumber

// if(answer === 0){
//   console.log("Que pena! você pode adotar um pet!")

// }else{
  
//     let total = []
//     while(answer > total.length){
//       const name=prompt("Digite o nome de um deles")
//       total.push(name)
//     }
//   console.log(total)
// }
  
//------------Exercicio 02---------

// const arrayOriginal=([10, 30, 50, 70, 90, 40])

// for(let number of arrayOriginal){
//   if(number > 0 ){
//   console.log(number)
//   }
// }

//Array original dividido por 10

// const arrayOriginal=([10, 30, 50, 70, 90, 40])
// for(let i=0; i < arrayOriginal.length; i++){
//   let numeroDividido=arrayOriginal[i]/10
//   console.log(numeroDividido)
// }

// Numeros pares do array
// const arrayOriginal=([10, 30, 50, 70, 90, 40])
// let arrayPAr = []
// for(par of arrayOriginal){
//   if(par % 2 ===0){
//     arrayPAr.push(par)
//   }
// }
// console.log(arrayPAr)

//----------imprimir elementos so array-------
//  const array= [ 09, 18, 12, 13, 12, 14, 05 ];

// for (let i=0; i < array.length; i++) {
//    console.log(`Elemento do indeex ${i} é: ${array[i]}`);
// }

//----imprimir maior e menor no console----
const array= [ 09, 18, 12, 13, 12, 14,];
let valorMaximo=0
let valorMinimo=Infinity
for(let num of array){
 if(num>valorMaximo){
   valorMaximo=num
}
if(num<valorMinimo){
valorMinimo=num
}
}
console.log(`Valor maximo é ${valorMaximo} e o minimo é ${valorMinimo}`)

