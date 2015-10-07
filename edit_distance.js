'use strict';

var minDistance = function(word1, word2){
  var results = [];
  var a;
  var b;
  for ( a = 0 ; a < word1.length + 1 ; a++ ){
    results.push([a]);
  }
  for ( b = 1 ; b < word2.length + 1 ; b++ ){
    results[0].push(b);
  }
  for ( a = 1 ; a < word1.length + 1 ; a++ ){
    for ( b = 1 ; b < word2.length + 1 ; b++ ){
      if (word1[a - 1] === word2[b - 1]){
        results[a].push(results[a - 1][b - 1]);
      }else{
        results[a].push(1 + Math.min(
          results[a - 1][b - 1],
          results[a - 1][b],
          results[a][b - 1]
        ));
      }
    }
  }
  return results[word1.length][word2.length];
};

console.log(minDistance('Carthorse', 'Orchestra'));
