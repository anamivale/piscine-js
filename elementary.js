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
  if (b == 0) {
    return 0;
  }
  if (a >= 0 && b > a) {
    return 0;
  }
  if (a < 0) {
    a = -a;
    if (a < b) {
      return 0;
    }

    let x = 0;
    while (a >= b) {
      a -= b;
      x++;
    }
    return -x;
  }
  if (b < 0) {
    b = -b;
    if (a < b) {
      return 0;
    }
    let x = 0;
    while (a >= b) {
      a -= b;
      x++;
    }
    return -x;
  }
  let x = 0;
  while (a >= b) {
    a -= b;
    x++;
  }
  return x;
};

const modulo = (a, b) => {
  if (b == 0) {
    return 0;
  }
  if (b > a) {
    return a;
  }
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
console.log(modulo(0, 0));
