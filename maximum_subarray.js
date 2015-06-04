'use strict';

var maxSubArray = function(nums) {
  var output = {};
  var maxValue;

  output['0'] = nums[0];
  maxValue = output['0'];

  for ( var i = 1 ; i < nums.length ; i++ ){
    var previousValue = output[i-1];
    if (previousValue < 0){
      previousValue = 0;
    }
    output[i] = previousValue + nums[i];
    maxValue = Math.max(maxValue, output[i]);
  }

  return maxValue;
};

var input;
input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(input));

input = [1];
console.log(maxSubArray(input));

input = [-1];
console.log(maxSubArray(input));
