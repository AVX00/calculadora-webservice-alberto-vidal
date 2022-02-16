const debug = require("debug");
const chalk = require("chalk");

const errorMsg = debug("ERROR:");

const isValidInput = (numbers) => {
  let isValid = true;
  if (numbers.length < 2) {
    errorMsg(chalk.red("provide 2 values"));
    isValid = false;
  }
  numbers.forEach((number) => {
    if (Number.isNaN(Number(number))) {
      errorMsg(chalk.red("some value is not a number... exiting"));
      isValid = false;
    }
  });
  return isValid;
};

exports.isValidInput = isValidInput;
