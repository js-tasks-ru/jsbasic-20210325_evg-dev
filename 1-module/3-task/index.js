function ucFirst(str) {
  if (str.length > 0) {
    const newStr = str.charAt(0).toUpperCase() + str.slice(1, str.length);
    return newStr;
  } else if (str.length === 1) {
    return str.toUpperCase();
  }
  else {
    return '';
  }
}
