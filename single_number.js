'use strict';

var singleNumber = function(nums) {
  var r = 0;
  nums.forEach(function(num){
    r = r ^ num;
  });
  return r;
};

console.log(singleNumber([1, 1, 2, 2, 3, 4, 4, 5, 5]));
