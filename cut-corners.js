function round(params) {
  let b = 0;
  let sign = false;
  if (params < 0) {
    sign = true;
    params = -params;
  }
  while (b + 1 <= params) {
    b++;
  }
  if (params - b >= 0.5) {
    b++;
  }

  return sign ? -b : b;
}

function floor(params) {
  let b = 0;
  let sign = false;
  if (params < 0) {
    sign = true;
    params = -params;
  }
  while (b + 1 <= params) {
    b++;
  }
  return sign ? -b - 1 : b;
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
  return sign ? -b + 1 : b;
}

function trunc(params) {
  let b = 0;
  let sign = false;
  if (params < 0) {
    sign = true;
    params = -params;
  }
  while (b + 1 <= params) {
    b++;
  }
  return sign ? -b : b;}


