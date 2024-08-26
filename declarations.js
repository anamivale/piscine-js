escapeStr = "`\\/ \"'";

arr = [4, "2"];

obj = {
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

console.log(nested.arr)