const multiply = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }
  if (a < 0 && b < 0) {
    a = -a;
    b = -b;
  } else if (a < 0 || b < 0) {
    let temp = Math.abs(a);
    a = Math.abs(b);
    b = temp;
    return -multiply(a, b);
  }
  let output = 0;
  for (let i = 1; i <= b; i++) {
    output += a;
  }
  return output;
};

const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  let negative = a < 0 !== b < 0;
  a = Math.abs(a);
  b = Math.abs(b);

  let quotient = 0;
  while (a >= b) {
    a -= b;
    quotient++;
  }
  return negative ? -quotient : quotient;
};

const modulo = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  let negative = a < 0;
  a = Math.abs(a);
  b = Math.abs(b);

  while (a >= b) {
    a -= b;
  }
  return negative ? -a : a;
};
