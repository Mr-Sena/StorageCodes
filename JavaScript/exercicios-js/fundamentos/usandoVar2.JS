var numero = 1

{
    var numero = 2
    console.log('Dentro:', numero)
}
console.log('fora:', numero)

// Essa situação não distingue a variável numero como sendo dentro do bloco ou fora - Por iso que é encorajado pela convenção adotar escopo local