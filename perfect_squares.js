'use strict';

var numSquares = function(num){
  var results = [0];
  for ( var n = 1 ; n <= num ; n++ ){
    var minResult = Infinity;
    for ( var i = 1 ; n - i * i >= 0 ; i++ ){
      var x = n - i * i;
      var tmpResult = 1 + results[x];
      if (tmpResult < minResult){
        minResult = tmpResult;
      }
    }
    results.push(minResult);
  }
  return results[num];
};

console.log(numSquares(12));
console.log(numSquares(13));
console.log(numSquares(0));
console.log(numSquares(1));
console.log(numSquares(1000));
