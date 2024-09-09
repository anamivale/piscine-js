function fusion(obj1, obj2) {
  const result = {};

  const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  allKeys.forEach((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      result[key] = [...val1, ...val2];

    } else if (typeof val1 === "string" && typeof val2 === "string") {
      result[key] = `${val1} ${val2}`; 

    } else if (typeof val1 === "number" && typeof val2 === "number") {
      result[key] = val1 + val2;

    } else if (
      typeof val1 === "object" &&
      typeof val2 === "object" &&
      val1 !== null &&
      val2 !== null &&
      !Array.isArray(val1) &&
      !Array.isArray(val2)
    ) {
      result[key] = fusion(val1, val2);

    } else {
      result[key] = val2 !== undefined ? val2 : val1;
    }
  });
  return result;
}

