function filterRange(arr, a, b) {
  let filtered = [];
  for (item in arr) {
    if ((arr[item] >= a) && (arr[item] <= b ) ) {
      filtered.push(arr[item]);
    }
  }
  return filtered;
}