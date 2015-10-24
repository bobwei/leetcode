var removeDuplicates = function(nums) {
  'use strict';
  const N = 2;
  let currents = [];
  for (let i = 0; i < N; i++) {
    currents.push(-Infinity);
  }
  let count = 0;
  nums.forEach((num) => {
    currents.some((current, i) => {
      if (num > current) {
        currents[i] = num;
        nums[count] = num;
        count += 1;
        return true;
      }
    });
  });
  return count;
};

console.log(removeDuplicates([1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]));
console.log(removeDuplicates([]));
