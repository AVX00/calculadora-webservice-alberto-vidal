const subtract = (numbers) =>
  numbers.reduce((result, number) => result - number);

const logSubstract = (numbers) =>
  `${numbers[1]} - ${numbers[0]} = ${subtract(numbers)}`;

exports.substractUtils = { subtract, logSubstract };
