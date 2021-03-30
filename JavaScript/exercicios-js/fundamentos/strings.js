const escola = "Cod3r"

//Método.charAt: retorna o índice de uma de uma determinado atributo, com um diferencial que se não existir nada naquele posição não há erro
console.log(escola.charAt(4))

//índice vazio:
console.log(escola.charAt(5))

//Para revelar o código no caracter na tabla unicode:
console.log(escola.charCodeAt(3))

//Procuar o indice pelo seu conteúdo
console.log(escola.indexOf("o"))

//Determinar um intervalo pelo índice(s):
console.log(escola.substring(1))// ← Ao valor que carrega "Cod3r", aplicando o método, se obtem "od3r"
console.log(escola.substring(0, 3))// ← Nesse caso foi indicado a primeira e a última posição

//Método de concatenação:
console.log('Escola '.concat(escola).concat('!'))

//Método de substituição:
console.log(escola.replace(3, 'e'))
//IMPORTANTE: o método suportar expressão regular (esitlo da nomenclatura abaixo)
console.log(escola.replace(/\d/, 'e'))
//Substituindo letras:
console.log(escola.replace(/\w/g, '*')) //Flag do Global: Utiliza-se o g depois da última barra para substituir todos os caracters e n so o 1º

//Separando valores dentro de um string e jogando em uma array:
console.log('Ana,Maria,Pedro'.split(','))
//Maneira alternativa com regex
console.log('Ana,Maria,Pedro'.split(/,/))