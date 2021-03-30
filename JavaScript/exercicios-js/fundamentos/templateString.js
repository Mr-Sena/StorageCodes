const nome = 'Sabrina'
const concatenacao = 'Olá ' + nome + '!'

//O indentificador no temaplate é o símbolo da crase (`)
const template = `\n\nOlá ${nome}!
    Como vai, bb?`

console.log(concatenacao, template)


//Expressões...
console.log(`1 + 1 = ${1 + 1}`)

//Criando um função:
const up = texto => texto.toUpperCase() // → texto é o parâmetro
console.log(`Ei... ${up('cuidado')}!`)