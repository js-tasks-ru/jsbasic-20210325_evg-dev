function getMinMax(str) {
  let pattern = /(-?\d+(\.\d+)?)/g,
      result = str.match(pattern).map(a => +a);
  result = {
    min: Math.min(...result),
    max: Math.max(...result)
  }
  return result;
}