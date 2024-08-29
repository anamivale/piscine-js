function trunc(params) {
  return parseInt(params);
}

function round(params) {
  let b = 0;
  let sign = false;
  if (params < 0) {
    sign = true;
    params = -params;
  }
  while (b + 1 < params) {
    b++;
  }
  if (sign) {
    x = params - b;
    if (x >= 0.5) {
      b++;
    }
    return -b;
  }
  x = params - b;
  if (x >= 0.5) {
    b++;
  }
  return b;
}

function floor(params) {
  let b = 0;
  let sign = false;
  if (params < 0) {
    sign = true;
    params = -params;
  }
  while (b + 1 < params) {
    b++;
  }
  if (sign) {
    return -b - 1;
  }

  return b;
}

function ceil(params) {
  let b = 0;
  let sign = false;
  if (params < 0) {
    sign = true;
    params = -params;
  }
  while (b < params) {
    b++;
  }
  if (sign) {
    return -b + 1;
  }

  return b;
}

