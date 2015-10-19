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


var singleNumber4Times = function(nums) {
  var fours = 0;
  var threes = 0;
  var twos = 0;
  var ones = 0;
  nums.forEach(function(num) {
    fours = (fours & ~num) | (threes & num);
    threes = (threes & ~num) | (twos & num);
    twos = (twos & ~num) | (ones & num);
    ones = (ones ^ num) & (~threes) & (~fours);
  });
  return ones;
};

console.log(singleNumber4Times([100, 2, 100, 100, 2, 3, 2, 100, 2]));
