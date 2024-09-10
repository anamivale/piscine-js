function filterValues(obj, calbackfn) {
  let values = Object.values(obj);
  let keys = Object.keys(obj);
  let result = {};

  for (let i = 0; i < values.length; i++) {
    if (calbackfn(values[i])) result[keys[i]] = values[i];
  }
  return result;
}

function mapValues(obj, calbackfn) {
  let values = Object.values(obj);
  let keys = Object.keys(obj);
  let result = {};
  for (let i = 0; i < values.length; i++) {
    result[keys[i]] = calbackfn(values[i]);
  }
  return result;
}

function reduceValues(obj, calbackfn, initialValue) {
  let values = Object.values(obj);
  let acc = typeof initialValue !== "undefined" ? initialValue : values[0];
  let start = typeof initialValue !== "undefined" ? 0 : 1;
  console.log(values[0]);
  for (let i = start; i < values.length; i++) {
    acc = calbackfn(acc, values[i]);
  }
  return acc;
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

console.log(filterValues(nutrients, (nutrient) => nutrient <= 12));
// output: { carbohydrates: 12, fat: 5 }
console.log(mapValues(nutrients, (v) => v + 1));
// output: { carbohydrates: 13, protein: 21, fat: 6 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr));
// output: 37
