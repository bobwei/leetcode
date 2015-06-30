'use strict';

/*

    n
01234567
leetcode
   i

f(n) = f(i) && s.slice(i, n), i from 0 to n - 1

f(4) = f(0) && s.slice(0, 4) ||
       f(1) && s.slice(1, 4) ||
       f(2) && s.slice(2, 4) ||
       f(3) && s.slice(3, 4)

*/

var wordBreak = function(s, wordDict){
  var output = {
    '0': true
  };
  for ( var n = 1 ; n < s.length + 1 ; n++ ){
    output[n] = false;
    for ( var i = 0 ; i < n ; i++ ){
      var tmp = output[i] && (wordDict.has(s.slice(i, n)));
      output[n] = output[n] || tmp ;
    }
  }
  return output[s.length];
};

var s, dict;
s = 'leetcode';
dict = new Set(['leet', 'code']);
console.log(wordBreak(s, dict));
