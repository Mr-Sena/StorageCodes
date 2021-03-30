let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)


console.log('   Trues:')
    //Expressando condição binário com número:
isAtivo = 1
//1 é um nível lógico alto portanto true como qualquer outro número além de 0. Para representa=lo como um valor lógico utiliza o inversor(!)
console.log(!!isAtivo)
console.log(!!' ')

console.log('\n    FAKES: ')//Situações que resolve um false
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\nRetorno da condição booleana:')
console.log(('' || null || 7 || 0))// Retorna o primeiro true que ele encontra, se não tiver, resolve o último false; Obs: || significa OU
console.log(!!('' || null || 7 || 0))//Conversão para valor lógico (true ou false)

//Aplicação prática para consolidar o conhecimento:

let nome = 'Lucas'
console.log(nome || 'Desconhecido')//Resolve o nome se possuir um "valor verdadeiro" ou desconhecido senão - uma regra comentada acima.