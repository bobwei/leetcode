'use strict';

var missingNumber = function(nums) {
  var r = 0;
  for ( var i = 0 ; i <= nums.length ; i++ ){
    r = r ^ i ^ nums[i];
  }
  return r;
};

console.log(missingNumber([0, 1, 3, 5, 4, 9, 7, 8, 6]));
