'use strict';

var numTrees = function(n){
  var output = {
    '0': 1,
    '1': 1
  };
  for ( var i = 2 ; i < n + 1 ; i++ ){
    output[i] = 0;
    for ( var j = 0 ; j < i ; j++ ){
      output[i] += output[j] * output[i - j - 1];
    }
  }
  return output[n];
};

console.log(numTrees(4));
