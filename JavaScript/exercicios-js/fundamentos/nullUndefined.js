let valor // Não inicializada
console.log(valor)
//console.log(valor2) → retorna um erro, pois não foi inicializada, ao contrario no comando acima que returna undefined.

valor = null // Ausência de valor
console.log(valor)

//console.log(valor.toString()) -→ Return → TypeError: Cannot read property 'toString' of null

const produto = {}
console.log('Preço:', produto.preco)
console.log('Conteúdo Objeto:',produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(produto)
console.log('Aquele valor ↑ retorna o tipo lógico:',!!produto.preco) // Retorna false - um tipo booleano pre definido pra essa situação (no caso ao undefined)
delete produto.preco// ← Comando apropriada para excluir o atributo
console.log(produto)

produto.preco = null // Sem preço
console.log(produto)
console.log(!!produto.preco)
console.log(produto.preco)