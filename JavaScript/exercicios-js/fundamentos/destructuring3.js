 function rand({min = 0, max = 1000 } ) {
     var random = Math.random() // essa função gera número quebrados, geralmente menores que 1
     const valor = random * (max - min) + min
     /*Habilitar caso quiser ver os números ↓
     console.log(`valor: ${random} X (${max} - ${min}) + ${min} = ${valor}`)*/
     return Math.floor(valor)
 }

 console.log(rand({}))
 console.log(rand({min: 800}))
 console.log(rand({max: 15}))

let obj = {min: 100, max: 12}
console.log(rand(obj))