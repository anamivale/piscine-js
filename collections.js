function arrToSet(params) {
  return new Set(params);
}
function arrToStr(params) {
  return params.join("");
}

function setToArr(params) {
  let arr = [];
  params.forEach((element) => {
    arr.push(element);
  });
  return arr;
}
function setToStr(params) {
  let arr = "";
  params.forEach((element) => {
    arr += element;
  });
  return arr;
}
function strToArr(params) {
  return params.split("");
}

function strToSet(params) {
  let arr = params.split("");
  return new Set(arr);
}

function mapToObj(params) {
  let obj = {};

  params.forEach((key, element) => {
    obj[element] = key;
  });
  return obj;
}
function objToArr(params) {
  let arr = [];
  for (let key in params) {
    arr.push(params[key]);
  }
  return arr;
}
function objToMap(params) {
  let map = new Map();
  for (let key in params) {
    map.set(key, params[key]);
  }
  return map;
}
function arrToObj(params) {
  let obj = {};

  for (i = 0; i < params.length; i++) {
    obj[i] = params[i];
  }
  return obj;
}
function strToObj(params) {
  let obj = {};

  for (i = 0; i < params.length; i++) {
    obj[i] = params[i];
  }
  return obj;
}

function superTypeOf(params) {
  if (
    typeof params === "object" &&
    params !== null &&
    !Array.isArray(params) &&
    !(params instanceof RegExp) &&
    !(params instanceof Date) &&
    !(params instanceof Set) &&
    !(params instanceof Map)
  ) {
    return "Object";
  }
  if (params instanceof Set) {
    return "Set";
  }
  if (params instanceof Map) {
    return "Map";
  }
  if (typeof params === "string") {
    return "String";
  }
  if (typeof params === "number") {
    return "Number";
  }
  if (Array.isArray(params)) {
    return "Array";
  }
  if (typeof params === "undefined") {
    return "undefined";
  }
  if (typeof params === "function") {
    return "Function";
  }
  if (params === null) {
    return "null";
  }
}
