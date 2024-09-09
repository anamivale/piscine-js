function fusion(obj1, obj2) {
  const result = {};

  // Get all unique keys from both objects
  const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

  // Iterate over all the unique keys
  allKeys.forEach((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    // If both values are arrays, concatenate them
    if (Array.isArray(val1) && Array.isArray(val2)) {
      result[key] = [...val1, ...val2];

      // If both values are strings, concatenate with a space
    } else if (typeof val1 === "string" && typeof val2 === "string") {
      result[key] = `${val1} ${val2}`.trim(); // trim to handle empty strings

      // If both values are numbers, sum them
    } else if (typeof val1 === "number" && typeof val2 === "number") {
      result[key] = val1 + val2;

      // If both values are objects (not null or arrays), merge recursively
    } else if (
      typeof val1 === "object" &&
      typeof val2 === "object" &&
      val1 !== null &&
      val2 !== null &&
      !Array.isArray(val1) &&
      !Array.isArray(val2)
    ) {
      result[key] = fusion(val1, val2);

      // In case of type mismatch or if only one object has a value, use the second object's value
    } else {
      result[key] = val2 !== undefined ? val2 : val1;
    }
  });
  return result;
}

