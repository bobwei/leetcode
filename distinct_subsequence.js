var numDistinct = function(s, t) {
  'use strict';

  let results = new Array(t.length);
  results[0] = 1;

  for (let i = 0; i <= s.length; i++) {
    let lastValue;
    for (let j = 0; j <= t.length; j++) {
      let tmp = results[j];
      if (i === 0) {
        if (j === 0) {
          results[j] = 1;
        }else {
          results[j] = 0;
        }
      }else {
        if (j === 0) {
          results[j] = 1;
        }else {
          if (s[i - 1] === t[j - 1]) {
            results[j] = results[j] + lastValue;
          }
        }
      }
      lastValue = tmp;
    }
  }
  return results[t.length];
};

console.log(numDistinct('rabbbit', 'rabbit'));
console.log(numDistinct('rabb', 'rab'));
console.log(numDistinct('ddd', 'dd'));
