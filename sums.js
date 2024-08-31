function sums(n) {
  if (n === 0) return [];
  if (n === 1) return [];
  function partition(num, max, prefix = []) {
    if (num === 0) return [prefix];
    let result = [];
    for (let i = Math.min(max, num); i >= 1; i--) {
      result = result.concat(partition(num - i, i, prefix.concat(i)));
    }
    return result;
  }
  let partitions = partition(n, n).filter((partition) => partition.length > 1);
  // Sort each inner partition in ascending order
  const sortedPartitions = partitions.map((partition) =>
    partition.slice().sort((a, b) => a - b)
  );
  // Sort the outer array
  sortedPartitions.sort((a, b) => {
    // Compare by length in descending order
    if (a.length !== b.length) {
      return b.length - a.length;
    }
    // Compare lexicographically in ascending order if lengths are the same
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] !== b[i]) {
        return a[i] - b[i]; // Ascending order
      }
    }
    // If all compared elements are equal, they are considered equal
    return 0;
  });
  return sortedPartitions;
}
