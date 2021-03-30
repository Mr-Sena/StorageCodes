{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
// A variável do tipo var dentro de um bloco de código - que não seja function - tem acesso no escopo globalmente, o que permite exibi-la a seguir:
console.log(sera)

function teste() {
    var locale = 123
    console.log(locale)
}

teste()
    /* Console.log(locale)
    Não é possível acessar a variável acima (locale) pq o seu escopo é local, sendo restrito somente dentro daquele bloco de código*/