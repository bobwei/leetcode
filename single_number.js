'use strict';

var singleNumber = function(nums) {
  return nums.reduce(function(s, v){
    return s ^ v;
  }, 0);
};

console.log(singleNumber([1, 1, 2, 2, 3, 4, 4, 5, 5]));
