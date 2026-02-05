// Crie uma função que recebe duas palavras (string) e retornar sua contatenação. De forma resumida, deve juntar as duas palavras em uma só.

function juntarPalavras(palavraA: string, palavraB: string) {
    const palavraJunta = palavraA + palavraB
    return palavraJunta
}

const palavrasUnidas = juntarPalavras("Olá, ", "mundo!")
console.log(palavrasUnidas)

// Outra forma de escrever a função de juntar duas palavras

const concatenarPalavras = (stringA: string, stringB: string) => {
    const palavraConcatenada = stringA + stringB
    return palavraConcatenada
}

const palavrasConcatenadas = concatenarPalavras("Type", " " + "Script")
console.log(palavrasConcatenadas)