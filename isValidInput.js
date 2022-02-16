const isValidInput = (numbers) =>
  !(Number.isNaN(numbers[0]) || Number.isNaN(numbers[1]));

exports.isValidInput = isValidInput;
