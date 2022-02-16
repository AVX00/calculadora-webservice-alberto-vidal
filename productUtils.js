const product = (numbers) =>
  numbers.reduce((result, number) => result * number, 1);

const logProduct = (numbers) =>
  `${numbers[1]} * ${numbers[0]} = ${product(numbers)}`;

exports.productUtils = { product, logProduct };
