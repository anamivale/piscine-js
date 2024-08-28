function cutFirst(params) {
  if (params.length <= 2) {
    return params;
  }
  return params.slice(2);
}

function cutLast(params) {
  if (params.length <= 2) {
    return params;
  }
  return params.slice(0, params.length - 2);
}

function cutFirstLast(params) {
  if (params.length <= 4) {
    return "";
  }
  return params.slice(2, params.length - 2);
}

function keepFirst(params) {
  if (params.length <= 2) {
    return params;
  }
  return params[0] + params[1];
}

function keepLast(params) {
  if (params.length <= 2) {
    return params;
  }
  return params[params.length - 2] + params[params.length - 1];
}

function keepFirstLast(params) {
  if (params.length <= 4) {
    return params
  }
  return params.slice(0, 2) + params.slice(params.length - 2);

}
// console.log(keepFirstLast("valeria"));
