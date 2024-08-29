function round(params) {
  if (typeof params !== 'number' || isNaN(params) || params === Infinity || params === -Infinity) {
    throw new Error('Invalid input: params must be a finite number.');
  }

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
  if (typeof params !== 'number' || isNaN(params) || params === Infinity || params === -Infinity) {
    throw new Error('Invalid input: params must be a finite number.');
  }

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
  if (typeof params !== 'number' || isNaN(params) || params === Infinity || params === -Infinity) {
    throw new Error('Invalid input: params must be a finite number.');
  }

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
  if (typeof params !== 'number' || isNaN(params) || params === Infinity || params === -Infinity) {
    throw new Error('Invalid input: params must be a finite number.');
  }

  let b = 0;
  let sign = false;

  if (params < 0) {
    sign = true;
    params = -params;
  }

  while (b + 1 <= params) {
    b++;
  }

  return sign ? -b : b;
}

// Test cases
const nums = [3.7, -3.7, 3.1, -3.1];
console.log(nums.map(round));  // Output should be [4, -4, 3, -3]
console.log(nums.map(floor));  // Output should be [3, -4, 3, -4]
console.log(nums.map(trunc));  // Output should be [3, -3, 3, -3]
console.log(nums.map(ceil));   // Output should be [4, -3, 4, -3]

