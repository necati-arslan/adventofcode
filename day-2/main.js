const fs = require("fs");

const data = fs.readFileSync("./data.txt", "utf-8").split("\n");

const resultArray = [];

let array = [
  "Game 81: 1 red, 12 green, 2 blue; 4 red, 12 green, 10 blue; 2 red, 9 blue, 12 green; 10 blue, 12 green",
  "Game 82: 4 blue, 3 green; 2 green, 3 blue; 4 blue, 2 red, 2 green; 2 red, 1 green",
];

const controlParams = { red: 12, green: 13, blue: 14 };

// Kontrol fonksiyonu
function shouldDelete(element) {
  const elements = element.split(";");

  for (let i = 0; i < elements.length; i++) {
    const counts = elements[i].split(",").map((item) => {
      return item.trim().split(" ")[0];
    });

    for (let j = 0; j < counts.length; j++) {
      const count = parseInt(counts[j]);
      const color = counts[j].split(" ")[1];

      if (controlParams[color] && count > controlParams[color]) {
        return true;
      }
    }
  }

  return false;
}

// Elemanları kontrol et ve koşullara uyanları sil
array = array.filter((item) => shouldDelete(item));

console.log(array);
