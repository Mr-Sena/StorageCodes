const [a] = [10]
console.log(a)
                               //  n1,n2,n3,n4
const [n1, , n3, , n5, ,n6 = 0] = [10, 7, 3, 1]

//        como n5 esta fora da array ↑ ele é um undefined, o mesmo aconteceria com o n6 se à ele não tivesse atribuído o 0
console.log(n1, n3, n5, n6)

//Desestruturação aninhada, nesse caso algo não muito usual
const [, [, nota]] = [[, 8, 8], [9, 6, 7]]
console.log(nota)