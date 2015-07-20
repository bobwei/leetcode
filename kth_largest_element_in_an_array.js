'use strict';

var swap = function(arr, i, j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var heapify = function(arr, i){
  var toSwapIndex = i;
  var left = 2 * i + 1;
  var right = left + 1;
  if (arr[left] > arr[i]){
    toSwapIndex = left;
  }
  if (arr[right] > arr[toSwapIndex]){
    toSwapIndex = right;
  }
  if (toSwapIndex !== i){
    swap(arr, i, toSwapIndex);
    heapify(arr, toSwapIndex);
  }
};

var pop = function(arr){
  var output = arr[0];
  swap(arr, 0, arr.length - 1);
  arr.pop();
  heapify(arr, 0);
  return output;
};

var findKthLargest = function(nums, k) {
  for ( var i = Math.floor((nums.length - 1) / 2) ; i >= 0 ; i-- ){
    heapify(nums, i);
  }
  var output;
  for ( var j = 0 ; j < k ; j++){
    output = pop(nums);
  }
  return output;
};

var data;
var k;

data = [1, 2, 4, 3, 9, 10];
k = 3;
console.log(findKthLargest(data, k));
