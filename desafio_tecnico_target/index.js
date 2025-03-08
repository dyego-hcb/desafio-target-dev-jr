const readline = require("readline");
const calcularSoma = require("./exercicios/problema01");
const verificarFibonacci = require("./exercicios/problema02");
const calcularFaturamentoJson = require("./exercicios/problema03");
const calcularPercentuais = require("./exercicios/problema04");
const inverterString = require("./exercicios/problema05");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const perguntar = (pergunta) => {
  return new Promise((resolve) => rl.question(pergunta, resolve));
};

const main = async () => {
  // Problema 1: Calcular som
  console.log("-----------------------------------------------------");
  console.log("Problema 01:");
  calcularSoma();
  console.log();

  // Problema 2: Fibonacci
  console.log("-----------------------------------------------------");
  console.log("Problema 02:");
  const numero = await perguntar(
    "Digite um número para verificar se pertence à sequência de Fibonacci: "
  );
  verificarFibonacci(Number(numero));
  console.log();

  // Problema 3: Calcular faturamento
  console.log("-----------------------------------------------------");
  console.log("Problema 03:");
  calcularFaturamentoJson();
  console.log();

  // Problema 4: Calcular percentuais
  console.log("-----------------------------------------------------");
  console.log("Problema 04:");
  calcularPercentuais();
  console.log();

  // Problema 5: Inverter string
  console.log("-----------------------------------------------------");
  console.log("Problema 05:");
  const str = await perguntar("Digite uma string para inverter: ");
  inverterString(str);

  rl.close();
};

main();
