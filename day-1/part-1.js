const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n")
    .map((x) => Number(x));

  let result = 0;

  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) result++;
  }

  console.log(result);
} catch (err) {
  console.error(err);
}
