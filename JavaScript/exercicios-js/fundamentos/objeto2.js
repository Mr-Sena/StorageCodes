console.log(typeof Object)// Return function
console.log(typeof new Object)// Return object - sem novidades - uma instância de uma classe é um objeto do seu tipo

const Cliente = function() {}
console.log(typeof Cliente)// Return function
console.log(typeof new Cliente)// Return object

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) // Return function
console.log(typeof new Produto)// Return object

//A classe é uma função, enquanto sua instância, um objeto

let teste = {a: 'alfa'}

console.log(typeof teste)