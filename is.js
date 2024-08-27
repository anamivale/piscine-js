const is = {};

is.num = (val) => {
  return typeof val === "number";
};
is.nan = (val) => {
  return Number.isNaN(val);
};
is.str = (val) => {
  return typeof val === "string";
};
is.bool = (val) => {
  return typeof val === "boolean";
};

is.undef = (val) => {
  return typeof val === "undefined";
};

is.def = (val) => {
  return !(typeof val === "undefined");
};
is.arr = (val) => {
  return Array.isArray(val);
};

is.obj = (val) => {
  return (
    typeof val === "object" &&
    val !== null &&
    !Array.isArray(val) &&
    !(val instanceof RegExp) &&
    !(val instanceof Date) &&
    !(val instanceof Set) &&
    !(val instanceof Map)
  );
};
is.fun = (val) => {
  return typeof val === "function";
};
is.truthy = (val) => {
  if (val) {
    return true;
  }
  return false;
};

is.falsy = (val) => {
  if (val) {
    return false;
  }
  return true;
};

