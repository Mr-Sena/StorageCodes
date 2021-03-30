
    //Contexto léxico:

        //Situação 1:
const SAUDACAO = 'Opa!'

        //Situalçao 2:
function exec() {
    const SAUDACAO = 'Faaala'
    return SAUDACAO
}

// Dois contexto distinto compartilhando possuindo o mesmo atributo, sem nenhuma relação e conflito na memória.
console.log(SAUDACAO)
console.log(exec())

//Objetos pode agrupar aninhamento de pares nome/valor
const Cliente = {
    nome: 'Carlos',
    idade: 20,
    peso: 90,
    endereço: {
        logradouro: 'Desconhecido',
        numero: null
    }
}

console.log(Cliente)