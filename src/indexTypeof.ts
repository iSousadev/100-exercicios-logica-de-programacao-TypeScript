// crie uma função que recebe um valor e retorna o tipo desse valor usando typeof

function verificarTipo(valor: number | string | boolean) {
    return `O tipo do valor é: ${typeof valor}`

}

const resultado = verificarTipo(42)
console.log(resultado)


// outra forma de escrever a função que verifica o tipo do valor

const tipoDoValor = (input: number | string | boolean) => {
    return `O tipo do valor é: ${typeof input}`
}

const resultado2 = tipoDoValor("Olá, TypeScript!")
console.log(resultado2) 