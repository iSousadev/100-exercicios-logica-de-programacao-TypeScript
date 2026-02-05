// criar uma função que recebe um numero e retorna se ele é verdadeiro ou falso (boolean)

function isPositivo(valor:boolean) {
    return valor === true ? "O valor é verdadeiro" : "O valor é falso"
}

const resultado = isPositivo(false)
console.log(resultado)

// outra forma de escrever a função que verifica se o valor é verdadeiro ou falso

const verificarBooleano = (valor: number) => {
    if (valor > 10) {
        return "O valor é verdadeiro"
    } else {
        return "O valor é falso"
    }
}

const resultado2 = verificarBooleano(15)
console.log(resultado2)

