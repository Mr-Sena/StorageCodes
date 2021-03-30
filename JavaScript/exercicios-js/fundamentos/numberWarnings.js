console.log(7 / 0) // Exibe o tipo Infinity

stringByNumber = '10.2' / 2 // A linguagem permite a divisão de uma String, por um número, isto é se o conteúdo daquela for puramente númerico
console.log(stringByNumber) // → Converts for number  (O que não seria permitido em outras linguagens)
//Obs:   A VÍRGULA NÃO É INTERPRETADO COMO UM SEPARADOR DE CASAS DECIMAIS NESSE SISTEMA - O QUE INVALIDÁRIA A CONVERSÃO PARA O TIPO NUMÉRICO
//Para número quebrados:      USE PONTO (.)

console.log(typeof stringByNumber)


//Por outro lado, não é possível multiplicar uma String para que ela seja representada n vezes

console.log('Show!!' * 2) // NaN → Not a Number


// Existe uma incoerência matématica graças à uma especificação que existe em várias linguagens para acelerar o processamento, vejamos:
// Binary Floating-Point Arithmetic

console.log(0.1 + .7) // → exibe: 0.7999999999999999

//console.log(10.toString()) → Isso não é permitido (um numerico seguido de um identificador/metodo imediatamente). Solução:

variable = 10
console.log(variable.toString())