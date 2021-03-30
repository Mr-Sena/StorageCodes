n1 = 1.2
n2 = 4
n3 = n1 + n2

console.log(typeof n1, typeof n2, typeof n3)
console.log(n3)
console.log(n3, 'é inteiro:' , Number.isInteger(n3))
console.log(n2, 'é inteiro:' , Number.isInteger(n2))
console.log('\n')

const AVALIACAO1 = 9.871
const AVALIACAO2 = 6.6871

const PESO1 = 1
const PESO2 = 2

const TOTAL = AVALIACAO1 * PESO1 + AVALIACAO2 * PESO2
const MEDIA =  TOTAL / (PESO1 + PESO2)

//Método para definir os números de casas decimais.toFixed()
console.log(MEDIA, '← Número real')
console.log(MEDIA.toFixed(2), 'Número arredondado')
console.log('\n')

//Representação do dado em String
console.log('Formatacao em String: ', MEDIA.toString())
console.log('Equivalência em binário:', MEDIA.toString(2)) // Base 2 no parâmetro do método.toString(para binário)

//Tipo de uma função: 
console.log('type Number:', typeof Number)