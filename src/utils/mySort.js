export function mySort(arr) {
  return arr.sort((a, b) => a.title.localeCompare(b.title));
}
