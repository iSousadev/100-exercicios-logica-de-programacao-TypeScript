// Crie um função que recebe dois números e retorna a soma deles se o resultado for positivo ou zero. Se der negativo, tretorna "numero negativo"

function somarNumeros(valorA: number, valorB: number) {
  const resultado = valorA + valorB;
  return resultado >= 0
    ? `A soma dos números é: ${resultado}`
    : "Número negativo";
}

const resultado = somarNumeros(-5, -5);
console.log(resultado);

// outra forma de escrever a função de soma de dois números

const somar = (numA: number, numB: number) => {
  const resultado = numA + numB;
  if (resultado >= 0) {
    return `A soma dos números é: ${resultado}`;
  } else {
    return "Número negativo";
  }
};

const resultado2 = somar(10, -3);
console.log(resultado2);
