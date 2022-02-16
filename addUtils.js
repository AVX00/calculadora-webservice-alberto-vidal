const add = (numbers) => numbers.reduce((result, number) => result + number, 0);

const logAddition = (numbers) =>
  `${numbers[0]} + ${numbers[1]} = ${add(numbers)}`;

const addUtils = { add, logAddition };

exports.addUtils = addUtils;
