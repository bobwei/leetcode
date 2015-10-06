'use strict';

var countCombinations = function(candidates, target){
  var output = {};
  for ( var m = 0 ; m < candidates.length ; m++ ){
    for ( var n = 0 ; n < target + 1 ; n++ ){
      var s1 = 0;
      if (m - 1 >= 0){
        s1 = output[(m - 1) + ',' + n];
      }
      var s2 = 0;
      if (n - candidates[m] === 0){
        s2 = 1;
      }else if (n - candidates[m] > 0){
        s2 = output[m + ',' + (n - candidates[m])];
      }
      output[m + ',' + n] = s1 + s2;
    }
  }
  return output[(candidates.length - 1) + ',' + target];
};

console.log(countCombinations([2, 3, 7], 12));

console.log(countCombinations([1, 2, 3], 4));

console.log(countCombinations([2, 5, 3, 6], 10));
