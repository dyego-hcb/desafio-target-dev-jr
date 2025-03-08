# Desafio Técnico - Target Sistemas

## Descrição

Este repositório contém as soluções para o desafio técnico de programação proposto. O código foi desenvolvido utilizando **Node.js** e está estruturado na pasta `desafio_tecnico_target`.

### Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.

## Problemas

### Problema 1:

Implementação de um algoritmo simples para calcular a soma dos números de 1 até 13, conforme a lógica fornecida no enunciado.

### Problema 2:

Desenvolvimento de um programa para verificar se um número informado pertence à sequência de Fibonacci, que começa com 0 e 1, sendo o próximo número a soma dos dois números anteriores.

### Problema 3:

Dado um vetor de faturamento diário de uma distribuidora, o programa calcula:

- O menor e o maior valor de faturamento ocorrido em um dia.
- O número de dias em que o faturamento foi superior à média mensal.

O arquivo **`dados.json`** contém os dados de faturamento diário, incluindo dias sem faturamento, que devem ser ignorados no cálculo da média.

### Problema 4:

Dado o faturamento mensal de uma distribuidora por estado, o programa calcula o percentual de representação de cada estado no valor total mensal. Os estados são fornecidos diretamente no código.

### Problema 5:

Implementação de uma função que inverte os caracteres de uma string, sem usar funções prontas como `reverse()`.

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js** versão 16 ou superior.

Você pode verificar a versão do Node.js instalada na sua máquina com o seguinte comando:

node --version

## Instalação

1. Clone este repositório para o seu computador:

git clone https://github.com/seu-usuario/desafio-tecnico.git
cd desafio-tecnico
cd desafio_tecnico_target

2. Instale as dependências necessárias:

npm install

## Rodando o Projeto

Após a instalação, execute o seguinte comando para rodar o código:

npm run start

Isso executará o arquivo `index.js`, que contém as soluções para os problemas propostos.

## Arquivo JSON Utilizado (Questão 3)

O programa faz uso do arquivo **`faturamento.json`** para o cálculo do faturamento diário. Este arquivo contém um vetor de objetos, onde cada objeto representa um dia de faturamento ou um dia sem faturamento. O programa ignora os dias sem faturamento ao calcular a média.

Exemplo de como o arquivo JSON pode ser estruturado:

    [
      {"dia": "2023-01-01", "faturamento": 1000},
      {"dia": "2023-01-02", "faturamento": 1500},
      {"dia": "2023-01-03", "faturamento": 0},
      {"dia": "2023-01-04", "faturamento": 1200}
    ]

## Licença

Este repositório está sob a licença MIT.

### Explicações adicionais:

1. **Problema 3**: O código utiliza **`dados.json`** para calcular o menor e maior faturamento diário e a quantidade de dias em que o faturamento superou a média mensal. O arquivo **JSON** é a entrada utilizada para os cálculos, sem a necessidade de usar XML.

2. **Estrutura de Pastas**: O código fonte está localizado na pasta `desafio_tecnico_target`, onde cada solução dos problemas foi implementada.
