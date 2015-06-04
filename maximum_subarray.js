'use strict';

var maxSubarray = function(nums) {
  var output = {};
  var maxValue = 0;

  output['0'] = Math.max(nums[0], 0);
  maxValue = Math.max(maxValue, output[0]);

  for ( var i = 1 ; i < nums.length ; i++ ){
    output[i] = Math.max(output[i-1] + nums[i], 0);
    maxValue = Math.max(maxValue, output[i]);
  }

  return maxValue;
};

var input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarray(input));

var input = [1];
console.log(maxSubarray(input));
