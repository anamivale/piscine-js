const modulo = (a, b) => {
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
  let rem = modulo(params, 1);

  let num = params - rem;
  return sign ? -num : num;
}

// const nums = [4, -3, 3, -2, 0];
// console.log(nums.map(round));
// console.log(nums.map(floor));
// console.log(nums.map(trunc));
// console.log(nums.map(ceil));
