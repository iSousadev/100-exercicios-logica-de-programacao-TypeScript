// Crie uma função que recebe dois valores e retorna a divisão entre eles. Caso não seja possivel realizar a divisão, a função deve retornar uma mensagem de erro.

function dividirValores(valorA: number, valorB: number) {
  if (valorB === 0) {
    return "Não é possível realizar a divisão por zero.";
  } else {
    return valorA / valorB;
  }
}

const resultado = dividirValores(10, 10);
console.log(resultado); // Output: 5


// Outra forma de criar a função utilizando arrow function:

const dividirValoresArrow = (valorA: number, valorB: number) => {
    const resultado = valorA / valorB;
    if (isNaN(resultado) || !isFinite(resultado)) {
        return "Não é possível realizar a divisão.";
    }else if (valorB === 0) {
        return "Não é possível realizar a divisão por zero.";
    }else {
        return resultado;
    }
}

const resultadoArrow = dividirValoresArrow(10, 4);
console.log(resultadoArrow); 