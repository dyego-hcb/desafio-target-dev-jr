const calcularPercentuais = () => {
  const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const totalFaturamento = Object.values(faturamentoEstados).reduce(
    (acc, curr) => acc + curr,
    0
  );

  for (let estado in faturamentoEstados) {
    let percentual = (faturamentoEstados[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
};

module.exports = calcularPercentuais;
