var removeDuplicates = function(nums) {
  'use strict';
  let current = -Infinity;
  let count = 0;
  nums.forEach((num) => {
    if (num > current){
      current = num;
      nums[count] = num;
      count += 1;
    }
  });
  return count;
};

console.log(removeDuplicates([1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]));
console.log(removeDuplicates([]));
