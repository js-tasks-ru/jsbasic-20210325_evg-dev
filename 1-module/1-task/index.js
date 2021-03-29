function factorial(n) {
  if (n > 1) {
    var result = n;
    for (n; n > 1; ) {
      result = Number(result * (n - 1));
      n--;
    }
    return result;   
  } else {
    return 1;
  }
}