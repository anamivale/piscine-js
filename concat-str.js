function concatStr(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    x = a + b;
    return x;
  }
  return a + b;
}
