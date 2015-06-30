'use strict';

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
