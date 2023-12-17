const fs = require("fs");

const data = fs.readFileSync("./data.txt", "utf-8").split("\n");

const resultArray = [];

let array = data;

const controlParams = { red: 12, green: 13, blue: 14 };
const gamePassed = [];

// Kontrol fonksiyonu
function shouldDelete(element) {
  const GameElements = element.split(":");
  console.log(GameElements[1]);
  let counts = GameElements[1].split(";").flatMap((item) =>
    item
      .trim()
      .split(",")
      .map((entry) => entry.trim())
  );
  //console.log(counts);
  for (let j = 0; j < counts.length; j++) {
    const count = parseInt(counts[j]);
    const color = counts[j].split(" ")[1];
    console.log(color);
    console.log(count);

    if (count > controlParams[color]) {
      return false;
    }
  }
  return true;
}

function sumGame(elements) {
  const total = [];
  elements.forEach((element) => {
    const GameElements = element.split(":");
    let number = GameElements[0].match(/\d+/)[0];
    total.push(number);
  });
  console.log(total);
  const sum = total.reduce((a, b) => {
    return +a + +b;
  }, 0);
  return sum;
}

// Elemanları kontrol et ve koşullara uyanları sil
array = array.filter((item) => shouldDelete(item));
console.log(array);

const result = sumGame(array);
console.log(result);
