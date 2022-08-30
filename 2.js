const readline = require("readline");

async function getNumberInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question("n = ", function (value) {
      rl.close();
      resolve(value);
    });
  });
}

async function main() {
  const numString = await getNumberInput();
  const num = Number(numString);

  for (let i = 1; i <= num; i++) {
    let line = "";
    for (let j = 0; j < num - i; j++) {
      line += "-";
    }
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    console.log(line);
  }
}

main();
