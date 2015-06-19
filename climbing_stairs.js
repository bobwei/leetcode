'use strict';

var climbStairs = function(n) {
  var output = {
    '1': 1,
    '2': 2
  };
  for ( var i = 3 ; i < n + 1 ; i++ ){
    output[i] = output[i - 1] + output[i - 2];
  }
  return output[n];
};

console.log(climbStairs(4));
