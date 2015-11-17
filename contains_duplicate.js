var containsDuplicate = function(nums) {
  'use strict';
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 5]));
console.log(containsDuplicate([1, 2, 3, 4, 4]));
