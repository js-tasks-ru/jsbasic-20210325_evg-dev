function sumSalary(salaries) {
  let totalSum = 0;
  for (key in salaries) {
    let value = salaries[key];
    if (typeof(value) === 'number' && isFinite(value)) {
      totalSum += value;
    }
  }
  return totalSum;
}
