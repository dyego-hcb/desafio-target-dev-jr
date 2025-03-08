const verificarFibonacci = (numero) => {
  let a = 0,
    b = 1,
    fib = 0;

  while (fib < numero) {
    fib = a + b;
    a = b;
    b = fib;
  }

  if (fib === numero) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} NÃO pertence à sequência de Fibonacci.`);
  }
};

module.exports = verificarFibonacci;
