export function getNextIdFromArray(arr) {
  const nextId = arr.reduce(
    (previous, current) => Math.max(previous, current),
    0
  );

  return nextId + 1;
}
