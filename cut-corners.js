const modulo = (a, b) => {
  let negative = a < 0;
  a = Math.abs(a);
  b = Math.abs(b);

  while (a >= b) {
    a -= b;
  }
  return a;
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
  return sign? -num-1 : num
}

function ceil(params) {
  let sign = false;

  if (params < 0) {
    params = -params;
    sign = true;
  }
  let rem = modulo(params, 1);

  let num = params - rem;
  return sign? -num : num+1
}

function trunc(params) {
  let sign = false;

  if (params < 0) {
    params = -params;
    sign = true;
  }
  let rem = modulo(params, 1);

  let num = params - rem;
  return sign? -num : num
}

