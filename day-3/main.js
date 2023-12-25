const fs = require("fs");

let data = fs.readFileSync("./data.txt", "utf-8").split("\n");
function calcData(data) {
  let total = 0;

  for (let lineIndex = 0; lineIndex < data.length; lineIndex++) {
    const numbers = data[lineIndex].match(/\d+/g);
    if (numbers != null) {
      let nextStart = 0;
      for (let number of numbers) {
        let partOfSum = false;
        let numberStart = data[lineIndex].indexOf(number, nextStart);
        nextStart = numberStart + 1;
        let numberEnd = numberStart + number.length;
        for (let y = lineIndex - 1; y <= lineIndex + 1; y++) {
          for (let x = numberStart - 1; x <= numberEnd; x++) {
            if (
              y >= 0 &&
              y < data.length &&
              x >= 0 &&
              x < data[lineIndex].length
            ) {
              if (isNaN(parseInt(data[y][x])) && data[y][x] != ".") {
                partOfSum = true;
              }
            }
          }
        }
        if (partOfSum) {
          total += parseInt(number);
        }
      }
    }
  }

  return total;
}

console.log(calcData(data));
