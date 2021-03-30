//Operador Desestruturação
//   novo recurso do ES2015

const pessoa = {
    nome: 'Joana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        número: 1100
    }
}

const { nome, idade } = pessoa
//Esse comando extrai os atributos dentro {que estão inclusos no colchete} dentro do objeto especificado depois do igual, o que permite utiliza-los fora do escopo com o respectivo nome da variável

console.log(nome, idade)


let { nome: name, idade: age } = pessoa
//Atribuindo os mesmo valores à nomes diferentes das variáveis
console.log(name, age)

var { endereco } = pessoa
console.log(endereco, "\nAcessando o atributo pelo objeto:", endereco.logradouro)


//Recolhendo os atributos deste objeto e definindo diretamente para variáveis
var { endereco: { logradouro, número, cep } } = pessoa
console.log(logradouro, número, cep)