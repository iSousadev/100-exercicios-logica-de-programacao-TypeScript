
// função para multiplicar dois números
function multiplicar (valorA: number, valorB: number) {
    return valorA * valorB
}

const resultado = multiplicar (4, 5)
console.log (resultado)

// outra forma de escrever a função de multiplicar dois números
const multiplicarNumeros = (numeroA: number, numeroB: number) => {
    const resultado = numeroA * numeroB
    return resultado
}

const resultado2 = multiplicarNumeros (6, 7)
console.log (resultado2)