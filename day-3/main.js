const fs = require("fs");

//let data = fs.readFileSync("./data.txt", "utf-8").split("\n");
let data = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`.split("\n");
console.log(data[0].indexOf(114, 0));

function calcData(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    const numbers = data[i].match(/\d+/g);
    if (numbers != null) {
      let nextStart = 0;
      for (let number of numbers) {
        let partOfSum = false;
        let numberStart = data[i].indexOf(number, nextStart);
        nextStart = numberStart + 1;
        console.log(number.length);
        let numberEnd = numberStart + number.length;
        for (let y = i - 1; y <= i + 1; y++) {
          for (let x = numberStart - 1; x <= numberEnd; x++) {
            if (y >= 0 && y < data.length && x >= 0 && x < data[i].length) {
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
