const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4989.90
console.log(prod1)

prod1['Desconto Legal'] = 0.40 // É possivel criar atributos com espaços - Dentro de colchetes - mas a convenção evita
console.log('Produto_1: ', prod1)

prod2 = {
    nome: 'Camisa manga longa',
    preco: 49.90,
    desconto: {
        prazo: 'Até 2021',
        porcentagem: 43
    }
}



prod2 = {
    nome: 'Camisa manga longa',
    preco: 49.90,
    desconto: {
        prazo: 'Até 2021',
        porcentagem: 43
    }
}

console.log(prod2)

//Transliteração de objeto para Json:
'prod2 = {"nome": "Camisa manga longa", "preco": 49.90, "desconto": {"prazo": "Até 2021", "porcentagem": 43}}'