'use strict';

var singleNumber = function(nums) {
  var threes = 0;
  var twos = 0;
  var ones = 0;
  nums.forEach(function(num) {
    threes = (threes & ~num) | (twos & num);
    twos = (twos & ~num) | (ones & num);
    ones = (ones ^ num) & (~threes);
  });
  return ones;
};

console.log(singleNumber([7, 2, 7, 7, 2, 3, 2]));
console.log(singleNumber([7, 10, 7, 7, 10, 3, 10]));
