const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n")
    .map((x) => Number(x));

  let threeMeasurementWindow = [];

  for (let i = 0; i < data.length; i++) {
    if (i + 2) {
      threeMeasurementWindow.push(data[i] + data[i + 1] + data[i + 2]);
    }
  }

  let result = 0;
  for (let i = 1; i < data.length; i++) {
    if (threeMeasurementWindow[i] > threeMeasurementWindow[i - 1]) result++;
  }

  console.log(result);
} catch (err) {
  console.error(err);
}
