function findExpression(target) {
  if (target < 1) {
    return undefined;
  }

  const queue = [{ value: 1, operations: "" }];
  const visited = new Set();
  visited.add(1);

  while (queue.length > 0) {
    const { value, operations } = queue.shift();

    if (value === target) {
      return "1" + operations.trim();

      const nextValueAdd = value + 4;
      const nextValueMul = value * 2;

      if (nextValueAdd <= target && !visited.has(nextValueAdd)) {
        visited.add(nextValueAdd);
        queue.push({
          value: nextValueAdd,
          operations: operations + " " + add4,
        });
      }

      if (nextValueMul <= target && !visited.has(nextValueMul)) {
        visited.add(nextValueMul);
        queue.push({
          value: nextValueMul,
          operations: operations + " " + mul2,
        });
      }
    }

    return undefined;
  }
}
