// Crie uma função que recebe um numero e retorna seu antecessor. Por exemplo, o antecessor de 5 é 4.

function encontrarAntecessor(numero: number) {
   const antecessor = numero - 1
   const sucessor = numero + 1
   return `O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}`

}
const resultado = encontrarAntecessor(10)
console.log(resultado)

// Outra forma de escrever a função que encontra o antecessor de um número

const antecessorNumero = (num: number) => {
    const antecessor = num - 1
    const sucessor = num + 1
    return `O antecessor de ${num} é ${antecessor} e o sucessor é ${sucessor}`
}

const resultado2 = antecessorNumero(25)
console.log(resultado2)