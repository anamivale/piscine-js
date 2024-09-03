function countLeapYears(date) {
  let count = 0;

  for (let i = 1; i <= date.getFullYear(); i++) {
    if (i % 4 === 0) {
      count++;
    }
  }
  return count-13;
}
console.log(countLeapYears(new Date('1664-08-09')));
