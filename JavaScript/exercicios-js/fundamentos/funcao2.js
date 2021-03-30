// Armazenando uma funcao em uma varíavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(3, 7)

//Armazenando uma funcao arrow em uma varíavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//Retorno implícito
const subtracao = (a, b) => a - b
//Se a função contém uma linha ↑ de códig pode ser mantida logo após o arrow =>
console.log(subtracao(2, 3))


const imprimir2 = a => console.log(a)
imprimir2('Q d++!')