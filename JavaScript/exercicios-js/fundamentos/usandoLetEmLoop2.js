const funcs = []

/*Conceito de closure nesse exercício nos remete a capacidade de 'memorizar'
Pela variável dentro do laço ser let, significa que durante as iterações a função armazena o determinado valor de i naquele momento. O que explica
elas poderem ser acessada por índice. (linha 16 e 17)

Porém se fosse do tipo var, a correspondência seria o número 10 - o último valor das iterações.
*/

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

console.log('\n\nTipo dos itens:', typeof(funcs[8]))

/*A array funcs, de dez posições, de 0 a 9, onde foram todas ocupadas por funções no laço acima.
Quando algum desse elementos é indicado[dentro de colchetes] eles devem ser chamado(com parênteses) para executar a function.
Quando for realizado o procedimento, o dado que vai ser associado é aquele que estava sendo utilizado na iteração daquele índice - justamente por ser
a variável do tipo let;
O que faz com que a posição 0 memorize o número 0, nesse caso, a posição 3, o número 3 e assim sucessivamente. */

i = 1

funcs[2]()
funcs[8]()