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
    if (i % 5 == 0 && i % 7 == 9) {
      console.log("Groclinics");
    } else {
      if (i % 5 == 0) {
        console.log("Gro");
      } else if (i % 7 == 0) {
        console.log("Clinics");
      } else {
        console.log(i);
      }
    }
  }
}

main();
