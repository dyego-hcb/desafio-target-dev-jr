const fs = require("fs");
const xml2js = require("xml2js");
const path = require("path");

const faturamentoJSON = require("../arquivos/dados.json");

const calcularFaturamentoJson = () => {
  console.log("Problema 03: Função usando dados.json");
  let faturamentoDiario = faturamentoJSON
    .map((f) => f.valor)
    .filter((valor) => valor > 0);

  let menorFaturamento = Math.min(...faturamentoDiario);
  let maiorFaturamento = Math.max(...faturamentoDiario);

  let mediaMensal =
    faturamentoDiario.reduce((acc, curr) => acc + curr, 0) /
    faturamentoDiario.length;

  let diasAcimaMedia = faturamentoDiario.filter(
    (valor) => valor > mediaMensal
  ).length;

  console.log(`Menor faturamento: R$${menorFaturamento}`);
  console.log(`Maior faturamento: R$${maiorFaturamento}`);
  console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
};

module.exports = calcularFaturamentoJson;
