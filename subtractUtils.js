const subtract = (numbers) => {
  return numbers.reduce((result, number) => result - number);
};

const logSubstract = (numbers) =>
  `The substraction of ${numbers[1]} to ${numbers[0]} is ${subtract(numbers)}`;

substractUtils = { subtract, logSubstract };

exports.substractUtils = substractUtils;
