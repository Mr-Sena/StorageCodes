// Em Js a função se comporta semelhante a classe em linguagem OO, como Java.


/* Notação com 'this.' permite que determinando atributo seja consultado como uma informação disponível fora do escopo 
                    caso contrário o nome não poderia ser levado para fora do escopo no exemplo abaixo*/
function Obj(nome) {
    this.nome = nome //Método alternativo para esse mesmo código(sem o ponto):          this['nome'] = nome
    this.up = function() {
        console.log(nome.toUpperCase())
    }
}

let obj1 = new Obj('Cadeira')
var obj2 = new Obj('Freezer')

console.log(obj1.nome)
obj1.up()
obj2.up()
console.log(typeof(Object))
