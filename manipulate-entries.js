function filterEntries(obj, calbackfn) {
  let result = {};

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (calbackfn([key, obj[key]])) result[key] = obj[key];
    }
  }
  console.log(result);
  return result;
}

function mapEntries(obj, calbackfn) {
  const newObj = {};
  for (let [k, v] of Object.entries(obj)) {
    if (obj.hasOwnProperty(k)) {
      let [newK, newV] = calbackfn([k, v]);
      newObj[newK] = newV;
    }
  }
  return newObj;
}

function reduceEntries(obj, calbackfn, initialValue) {
  let entries = Object.entries(obj);
  let acc = typeof initialValue !== "undefined" ? initialValue : entries[0];
  let start = typeof initialValue !== "undefined" ? 0 : 1;
  for (let i = start; i < entries.length; i++) {
    acc = calbackfn(acc, entries[i]);
  }
  return acc;
}
// const groceriesCart = { orange: 500, oil: 20, sugar: 480 };
// filterEntries(groceriesCart, ([, v]) => v < 300);
