// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string= 1

// ele me retorna que o tipo Number não é uma string

// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

// const meuNumero: number= 1

// const meuNumeroComString: number | string = 'doglas'

// usamos o operador lógico (ou/| )

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// type pessoa={
//   nome:string,
//   idade:number,
//   corFavorita:string
// }

// const personDetails: pessoa={
//   nome:'Doglas Viegas',
//   idade:23,
//   corFavorita:"vermelho"
// }

// const personDetailsTwo: pessoa={
// nome:"Stefani Roppa",
// idade:24,
// corFavorita:"azul"
// }

// const personDetailsThree:pessoa={
//   nome:"Sereia",
//   idade:3,
//   corFavorita:"preto"
// }



// d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.

// enum CoresDoArcoiris{
//   VERMELHO='Vermelho',
//   LARANJA='Laranja',
//   AMARELO='Amarelo',
//   VERDE='Verde',
//   AZUL='Azul',
//   ANIL='Anil',
//   VIOLETA='Violeta'
// }


// type pessoa={
//   nome:string,
//   idade:number,
//   corFavorita:CoresDoArcoiris
// }

// const personDetails: pessoa={
//   nome:'Doglas Viegas',
//   idade:23,
//   corFavorita:CoresDoArcoiris.VERMELHO
// }

// const personDetailsTwo: pessoa={
// nome:"Stefani Roppa",
// idade:24,
// corFavorita:CoresDoArcoiris.AZUL
// }

// const personDetailsThree:pessoa={
//   nome:"Sereia",
//   idade:3,
//   corFavorita:CoresDoArcoiris.VIOLETA
// }