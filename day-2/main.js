const fs = require("fs");

const data = fs.readFileSync("./data.txt", "utf-8").split("\n");

let array = data;

const controlParams = { red: 12, green: 13, blue: 14 };

// Control Fuc
function shouldDelete(element) {
  const GameElements = element.split(":");
  let counts = GameElements[1].split(";").flatMap((item) =>
    item
      .trim()
      .split(",")
      .map((entry) => entry.trim())
  );
  for (let j = 0; j < counts.length; j++) {
    const count = parseInt(counts[j]);
    const color = counts[j].split(" ")[1];

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

array = array.filter((item) => shouldDelete(item));

const result = sumGame(array);
console.log(result);
