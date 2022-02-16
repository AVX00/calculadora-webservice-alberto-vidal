const division = (numbers) =>
  numbers.reduce((result, number) => result / number);

const logDivision = (numbers) =>
  `${numbers[0]} / ${numbers[1]} = ${division(numbers)}`;

exports.divisionUtils = { division, logDivision };
