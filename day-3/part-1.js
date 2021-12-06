const path = require("path");
const fs = require("fs");

try {
  const data = fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
    .split("\n")
    .map((x) => x.replace(/(\r\n|\n|\r)/gm, "").split(""));

  let gammaRate = [];
  let epsilonRate = [];

  let zeroCount = 0;
  let oneCount = 0;

  for (let i = 0; i < data[0].length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (Number(data[j][i]) === 0) zeroCount++;
      if (Number(data[j][i]) === 1) oneCount++;
      if (data.length - 1 === j) {
        if (zeroCount > oneCount) {
          gammaRate.push(0);
          epsilonRate.push(1);
        } else {
          gammaRate.push(1);
          epsilonRate.push(0);
        }
        zeroCount = 0;
        oneCount = 0;
      }
    }
  }

  console.log(
    parseInt(gammaRate.join(""), 2) * parseInt(epsilonRate.join(""), 2)
  );
} catch (err) {
  console.error(err);
}
