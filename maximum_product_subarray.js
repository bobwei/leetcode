'use strict';

var maxProduct = function(nums) {
  var f_max = [nums[0]];
  var f_min = [nums[0]];
  var max = nums[0];
  for ( var i = 1 ; i < nums.length ; i++ ){
    f_max[i] = Math.max(
      nums[i],
      nums[i] * f_max[i - 1],
      nums[i] * f_min[i - 1]
    );
    f_min[i] = Math.min(
      nums[i],
      nums[i] * f_max[i - 1],
      nums[i] * f_min[i - 1]
    );
    max = Math.max(max, f_max[i]);
  }
  console.log(f_max, f_min);
  return max;
};

var data;

data = [1, -2, -3, 4, -5, 6, 0, 7];
console.log(maxProduct(data));

data = [2, 3, -2, 4];
console.log(maxProduct(data));
