'use strict';

var majorityElement = function(nums) {
  var output = {};
  var n = nums.length / 2;
  for ( var i = 0 ; i < nums.length ; i++ ){
    if (!output[nums[i]]){
      output[nums[i]] = 0;
    }
    output[nums[i]] += 1;
    if (output[nums[i]] > n){
      return nums[i];
    }
  }
};


var data;

data = [1, 3, 1, 1, 2, 1, 3, 3, 3, 3, 4, 3, 3, 3];
console.log(majorityElement(data));
