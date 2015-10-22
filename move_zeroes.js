var moveZeroes = function(nums) {
  'use strict';

  let count = 0;
  nums.forEach((num) => {
    if (num) {
      nums[count] = num;
      count += 1;
    }
  });
  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }
};

var data;

data = [0, 1, 0, 3, 12, 0, 9, 7];
moveZeroes(data);
console.log(data);
