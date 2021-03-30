function rand([min = 0, max = 100]) {
    if (min > max) [min, max] = [max, min] 
    //Se a regra for atendida os valores serão invertido executando o código apartir da coluna 20 (linha 2)
    random = Math.random()
    valor = random * (max - min) + min
    return Math.floor(valor)
}

array = [255, 230] // Não se procupar com a ordem, as posições serão reestabelecida pela condição da linha 2
console.log(rand([]))
console.log(rand(array))
console.log(rand([, 10]))
console.log(rand()) // não é possível executar esse código sem definir um array como argumento