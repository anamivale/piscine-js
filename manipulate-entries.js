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
function lowCarbs(entries) {
  return filterEntries(entries, (entry) => {
    let value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1];
    return parseInt(value) <= 50;
  });
}
function totalCalories(entries) {
  return Number(
    reduceEntries(
      entries,
      (acc, curr) => {
        let value = (nutritionDB[curr[0]]["calories"] / 100) * curr[1];
        return acc + value;
      },
      0
    ).toFixed(1)
  );
}
function cartTotal(entries) {
  let res = {};
  for (let key in entries) {
    res[key] = {};
    for (let dbKey in nutritionDB[key]) {
      res[key][dbKey] =
        Math.round((entries[key] / 100) * nutritionDB[key][dbKey] * 1000) /
        1000;
    }
  }
  return res;
}
