const odds = [1, 3, 204, 5, 7, 9];

const maximum = odds.reduce((max, number) => {
  if (number > max) {
    return number;
  }
  return max;
});

console.log(maximum);
