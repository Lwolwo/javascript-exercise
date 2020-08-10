function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(item => item % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter(item => collection.lastIndexOf(item) === collection.indexOf(item));
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
