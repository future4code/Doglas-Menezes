function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
 const salarioFixo = 2000
 const salarioFinal = qtdeCarrosVendidos * 100 + (valorTotalVendas-(valorTotalVendas*0.95)) + salarioFixo

  return salarioFinal
  } 