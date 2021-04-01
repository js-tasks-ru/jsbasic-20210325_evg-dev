function checkSpam(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  const spamWords = ['1xBet','xxx'];
  let totalResult = 0;
  spamWords.some(function(el,i) {
    el = el.toLowerCase();
    let strSpam = str.indexOf(el);
    if (strSpam >= 0) {
      totalResult += 1;
    } else {
      if (totalResult > 0) {
        totalResult = totalResult - 1;
      }
    }
    return totalResult;
  });
  if (totalResult > 0) {
    return true;
  } else {
    return false;
  }  
}