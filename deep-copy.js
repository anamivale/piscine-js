function deepCopy(params) {
  if (params.constructor === "Array") {
    return [...params];
  }
  return params;
}
