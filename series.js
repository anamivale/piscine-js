async function series(args) {
  let results = [];
  for (const fn of args) {
    const result = await fn(); // Wait for each function to resolve
    results.push(result); // Collect the result
  }
  return results;
}
