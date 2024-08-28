const multiply = (a, b) => {
  if (a < 0 && b < 0) {
    a = -a;
    b = -b;
    let output = 0;
    for (let i = 1; i <= b; i++) {
      output += a;
    }
    return output;
  }
  if (a < 0) {
    a = -a;
    let output = 0;
    for (let i = 1; i <= b; i++) {
      output += a;
    }
    return -output;
  }
  if (b < 0) {
    b = -b;
    let output = 0;
    for (let i = 1; i <= b; i++) {
      output += a;
    }
    return -output;
  }

  let output = 0;
  for (let i = 1; i <= b; i++) {
    output += a;
  }
  return output;
};

const divide = (a, b) => {
  if (a < 0) {
    a = -a;
    let x = 0;
  while (a > 0) {
    a -= b;
    x++;
  }
  return -x;
  }
  if (b < 0) {
    b = -b;
    let x = 0;
  while (a > 0) {
    a -= b;
    x++;
  }
  return -x;
  }
  let x = 0;
  while (a > 0) {
    a -= b;
    x++;
  }
  return x;
};
const modulo = (a, b) => {
  if (a < 0) {
    a = -a;
  }
  if (b < 0) {
    b = -b;
  }
  let x = 0;
  while (a > b - 1) {
    a -= b;
    x = a;
  }
  return x;
};
console.log(divide(-12, 6));
