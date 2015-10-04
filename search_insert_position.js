'use strict';

var searchInsert = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  while (left <= right){
    var center = Math.floor((left + right) / 2);
    if (nums[center] === target){
      return center;
    }else if (nums[center] < target){
      left = center + 1;
    }else{
      right = center - 1;
    }
  }
  return left;
};

var data;

data = [1, 3, 5, 6];
console.log(searchInsert(data, 5));

data = [1, 3, 5, 6];
console.log(searchInsert(data, 2));

data = [1, 3, 5, 6];
console.log(searchInsert(data, 7));

data = [1, 3, 5, 6];
console.log(searchInsert(data, 0));

data = [1, 3, 5, 6];
console.log(searchInsert(data, 100));

data = [];
console.log(searchInsert(data, 10));
