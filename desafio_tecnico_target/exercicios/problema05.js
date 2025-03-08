const inverterString = (str) => {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  console.log("String invertida:", invertida);
};

module.exports = inverterString;
