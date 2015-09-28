'use strict';

var swap = function(arr, i, j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var sortColors = function(nums){
  var i = 0;
  var j = 0;
  var k = nums.length - 1;
  while (i <= k){
    if (nums[i] === 0){
      // swap 0's with the starting of 1's
      swap(nums, i, j);
      i += 1;
      j += 1;
    }else if (nums[i] === 1){
      i += 1;
    }else if (nums[i] === 2){
      swap(nums, i, k);
      k -= 1;
    }
  }
};


var data;

data = [0, 2, 1, 1, 2, 0, 1];
sortColors(data)
console.log(data);

data = [2, 0];
sortColors(data);
console.log(data);

data = [0, 1, 0];
sortColors(data);
console.log(data);

data = [2, 1, 2];
sortColors(data);
console.log(data);
