escapeStr = "`\\/ \"'";

const arr = [4, "2"];
Object.freeze(arr)

const obj = {
  str: "valeria",
  num: 10,
  bool: true,
  undef: undefined,
};
Object.freeze(obj)

nested = {
  arr: [4, undefined, "2"],
  obj: {
    str: "valeria",
    num: 10,
    bool: true,
  },
};
Object.freeze(nested)


