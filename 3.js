const readline = require("readline");

async function getNumberInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question("Enter numbers separated by space: ", function (value) {
      rl.close();
      resolve(value);
    });
  });
}

async function main() {
  try {
    const numsString = await getNumberInput();
    const strArray = numsString.split(" ");
    let numsArray = [];
    const reg = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
    for (let numString of strArray) {
      if (reg.test(numString)) {
        numsArray.push(Number(numString));
      }
    }

    for (let i = numsArray.length; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (numsArray[j] > numsArray[j + 1]) {
          let temp = numsArray[j];
          numsArray[j] = numsArray[j + 1];
          numsArray[j + 1] = temp;
        }
      }
    }

    console.log(numsArray.join(" "));
  } catch (e) {
    console.log(e);
  }
}

main();
