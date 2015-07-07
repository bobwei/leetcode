/*
n            i = 0
catsanddog   catsanddog

             i = 1
             c atsanddog

             i = 2
             ca tsanddog


             i = 9
             catsanddo g

f(n) = f(i) + s.substring(i, n), i from 0 to n - 1

f(0) = [[]]

*/
'use strict';

var wordBreak = function(s, wordDict) {
  var output = {
    '0': [[]]
  };
  for ( var n = 1 ; n < s.length + 1 ; n++ ){
    output[n] = [];
    wordDict.forEach(function(word){
      if (word.length <= n && s.slice(n - word.length, n) === word){
        output[n - word.length].forEach(function(obj){
          output[n].push(
            obj.concat(
              [word]
            )
          );
        });
      }
    });
  }
  return output[s.length].map(function(obj){
    return obj.join(' ');
  });
};

var dict;
var s;

dict = new Set(['cat', 'cats', 'and', 'sand', 'dog']);
s = 'catsanddog';
console.log(wordBreak(s, dict));

// dict = new Set(['a','aa','aaa','aaaa','aaaaa','aaaaaa','aaaaaaa','aaaaaaaa','aaaaaaaaa','aaaaaaaaaa']);
// s = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab';
// console.log(wordBreak(s, dict));
