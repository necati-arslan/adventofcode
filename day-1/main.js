const fs = require("fs");

const data = fs.readFileSync("./data.txt", "utf-8").split("\n");

const numbers = data.map((item) => item.replace(/\D/g, ""));

const resultArray = [];

numbers.forEach((number) => {
  let firstDigit = number.substring(0, 1);
  let lastDigit = number.slice(-1);

  // Tek haneli sayıları iki haneli yap
  if (number.length === 1) {
    lastDigit = firstDigit;
  }

  resultArray.push(`${firstDigit}${lastDigit}`);
});

const sum = resultArray.reduce((a, b) => {
  return +a + +b;
}, 0);
console.log(sum);
