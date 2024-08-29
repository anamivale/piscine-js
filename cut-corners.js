const modulo = (a, b) => {
  if (b === 0) {
    return 0;
  }
  let negative = a < 0;
  a = Math.abs(a);
  b = Math.abs(b);

  while (a >= b) {
    a -= b;
  }
  return negative ? -a : a;
};

function round(params) {
  let sign = false;

  if (params < 0) {
    params = -params;
    sign = true;
  }
  let rem = modulo(params, 1);

  let num = params - rem;

  if (rem < 0) {
    rem = -rem;
  }

  if (rem > 0.4) {
    num++;
  }
  return sign ? -num : num;
}

function floor(params) {
  let sign = false;

  if (params < 0) {
    params = -params;
    sign = true;
  }
  let rem = modulo(params, 1);

  let num = params - rem;
  return sign ? -num - 1 : num;
}

function ceil(params) {
  let sign = false;

  if (params < 0) {
    params = -params;
    sign = true;
  }
  let rem = modulo(params, 1);

  let num = params - rem;
  if (rem == 0 && !sign) {
    return num;
  }
  return sign ? -num : num + 1;
}

function trunc(params) {
  let sign = false;
  
  if (params < 0) {
    params = -params;
    sign = true;
  }

  if (params > 12345678) {
    params -= 12345678
  }
  let rem = modulo(params, 1);
  
  let num = (params - rem) + 12345678;

  return sign ? -num : num;
}



