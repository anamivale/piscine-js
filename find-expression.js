function findExpression(target) {
  if (target < 1) {
    return undefined;
  }

  // BFS initialization
  const queue = [{ value: 1, operations: "" }];
  const visited = new Set();
  visited.add(1);

  while (queue.length > 0) {
    const { value, operations } = queue.shift();

    // Check if we've reached the target
    if (value === target) {
      return "1"+ operations.trim(); // Return the operations string without leading/trailing spaces
    }

    // Apply the operations
    const nextValueAdd = value + 4;
    const nextValueMul = value * 2;

    if (nextValueAdd <= target && !visited.has(nextValueAdd)) {
      visited.add(nextValueAdd);
      queue.push({ value: nextValueAdd, operations: operations + " " + add4 });
    }

    if (nextValueMul <= target && !visited.has(nextValueMul)) {
      visited.add(nextValueMul);
      queue.push({ value: nextValueMul, operations: operations + " " + mul2 });
    }
  }

  // If we exhaust the queue without finding the target
  return undefined;
}

