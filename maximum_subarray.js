'use strict';

var maxSubArray = function(nums) {
  var max = - Infinity;
  var output = {
    '-1': 0
  };
  for ( var i = 0 ; i < nums.length ; i++){
    output[i] = Math.max(
      nums[i],
      output[i - 1] + nums[i]
    );
    max = Math.max(max, output[i]);
  }
  return max;
};

var input;
input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(input));

input = [1];
console.log(maxSubArray(input));

input = [-1];
console.log(maxSubArray(input));
