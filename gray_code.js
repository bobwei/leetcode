var grayCode = function(n) {
  'use strict';
  if (!n) {
    return [0];
  }
  let results = [0, 1];
  for (let i = 1; i < n; i++) {
    results.slice().reverse().forEach((j) => {
      let k = (j >>> 0).toString(2).split('');
      let zeroPadding = n - k.length;
      for (let m = 0; m < zeroPadding; m++) {
        k.unshift('0');
      }
      k[k.length - 1 - i] = 1;
      k = k.join('');
      results.push(parseInt(k, 2));
    });
  }
  return results;
};

console.log(grayCode(0));
console.log(grayCode(1));
console.log(grayCode(3));
