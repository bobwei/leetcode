'use strict';

var fibonacci = function(n){
  var results = {
    '0': 0,
    '1': 1
  };
  var i = 2;
  while (i <= n){
    results[i] = results[i-1] + results[i-2];
    i++;
  }
  return results[n];
};

console.log(fibonacci(100));
