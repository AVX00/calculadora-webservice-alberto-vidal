const division = (numbers) =>
  numbers.reduce((result, number) => result / number);

const logDivision = (numbers) =>
  `The division of ${numbers[0]} and ${numbers[1]} is ${division(numbers)}`;

exports.divisionUtils = { division, logDivision };
