const valores = [7.7, 8, 6, 9.2]
console.log(valores[0], valores [3])
console.log(valores[4])// Resolve undefined, pois não existe a posição

//O que acontece se tiver uma lacuna nas posição:
valores[7] = 10
console.log(valores) // -> Cria quantos items for necessario - preenchido por <n empty items> até determinada posição
console.log(valores.length)

//adc items de tipos diferentes na array:
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Exclusão de itens
console.log(valores.pop()) // → Exclui o último item do vetor e retorna ele nessa instância
console.log(valores)

delete valores[1]// Exclusão por índice (deixa o espaço empty)
console.log(valores)


//Tipo de uma array: object
console.log('Type of array: ', typeof valores)