function camelize(str) {
  if (str.length > 0) {
    let strArr = str.split('-'),
        newStrArr = [];
    strArr.forEach(function (item, index) {
      if ((item.length > 0)) {
        if (index > 0) {
          item = item.charAt(0).toUpperCase() + item.slice(1, item.length);
        }
        newStrArr.push(item);
      }
    });
    newStrArr = newStrArr.join('');
    return newStrArr;
  } else {
    return str;
  }
}