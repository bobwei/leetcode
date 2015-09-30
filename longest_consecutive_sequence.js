'use strict';

var longestConsecutive = function(nums) {
  var numsSet = new Set(nums);
  var max = 0;
  nums.forEach(function(num, i){
    if (numsSet.has(num)){
      var startingPoint = nums[i];
      while (numsSet.has(startingPoint - 1)){
        startingPoint -= 1;
      }
      var count = 1;
      while (numsSet.has(startingPoint + 1)){
        startingPoint += 1;
        count += 1;
        numsSet.delete(startingPoint);
      }
      max = Math.max(max, count);
    }
  });
  return max;
};


var data;

data = [100, 4, 200, 1, 3, 2, 5, 101, 103, 102, 105, 104];
console.log(longestConsecutive(data));

data = [];
console.log(longestConsecutive(data));
