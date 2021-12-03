const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n")
    .map((x) => x.split(" "));

  let position = [0, 0];
  let aim = 0;

  for (let i = 0; i < data.length; i++) {
    switch (data[i][0]) {
      case "forward":
        position[0] += Number(data[i][1]);
        position[1] += aim * Number(data[i][1]);
        break;
      case "down":
        aim += Number(data[i][1]);
        break;
      case "up":
        aim -= Number(data[i][1]);
        break;
    }
  }

  console.log(position[0] * position[1]);
} catch (err) {
  console.error(err);
}
