'use strict';

var swap = function(arr, i, j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var sortColors = function(nums) {
  var j;
  var k;
  nums.forEach(function(num, n){
    if (num === 0){
      if (j !== undefined){
        swap(nums, n, j);
        j += 1;
      }
      if (k !== undefined){
        swap(nums, n, k);
        k += 1;
      }
    }else if (num === 1){
      if (k !== undefined){
        swap(nums, n, k);
        k += 1;
      }
      if (j === undefined){
        if (k === undefined){
          j = n;
        }else{
          j = k - 1;
        }
      }
    }else if (num === 2){
      if (k === undefined){
        k = n;
      }
    }
  });
};

var data;

data = [0, 2, 1, 0, 0, 2, 1, 2, 2];
sortColors(data);
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
