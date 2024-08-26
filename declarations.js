escapeStr = "`\\/ \"'";

const arr = [4, "2"];

const obj = {
  str: "valeria",
  num: 10,
  bool: true,
  undef: undefined,
};

nested = {
  arr: [4, undefined, "2"],
  obj: {
    str: "valeria",
    num: 10,
    bool: true,
  },
};
Object.freeze(obj)
Object.freeze(nested)
Object.freeze(arr)


console.log(nested.arr)