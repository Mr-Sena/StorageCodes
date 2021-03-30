// Funcao sem retorno

function imprimirSoma (a, b) {
    console.log(a + b)
    console.log('Tipo do primeiro parâmetro: ', typeof(a))
    console.log('Tipo do segundo parâmetro: ', typeof(b))
    console.log()
}

imprimirSoma(2, 3)

imprimirSoma(2)// run a + b ----> 2 + undefined = NotANumber

imprimirSoma(7, 3, 4, 5, 6, 7, 8, 9) // A função pede somente 2 argumentos, que serão os primeiros, depois disso serão ignorados qualquer valor

imprimirSoma()

// Funcao com retorno


function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3)) // Nesse caso o segundo parâmetro é opcional, uma vez que o seu valor padrão foi estabelecido como zero (linha 16)
console.log(soma( 9))