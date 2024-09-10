function filterKeys(obj, calbackfn) {
  let values = Object.values(obj);
  let keys = Object.keys(obj);
  let result = {};

  for (let i = 0; i < values.length; i++) {
    if (calbackfn(keys[i])) result[keys[i]] = values[i];
  }
  return result;
}

function mapKeys(obj, calbackfn) {
  let values = Object.values(obj);
  let keys = Object.keys(obj);
  let result = {};
  for (let i = 0; i < values.length; i++) {
    result[calbackfn(keys[i])] = values[i];
  }
  return result;
}

function reduceKeys(obj, calbackfn, initialValue) {
  let keys = Object.keys(obj);
  let acc = typeof initialValue !== "undefined" ? initialValue : keys[0];
  let start = typeof initialValue !== "undefined" ? 0 : 1;
  for (let i = start; i < keys.length; i++) {
    acc = calbackfn(acc, keys[i]);
  }
  return acc;
}
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /fat/.test(key)))
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat
