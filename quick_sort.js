'use strict';

var swap = function(arr, i, j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var partition = function(arr, left, right){
  var pivotIndex = left;
  var i = left + 1;
  var j = right;
  while (true){
    while (arr[i] < arr[pivotIndex]){
      i++;
    }

    while (arr[j] > arr[pivotIndex]){
      j--;
    }
    if (i >= j){
      break;
    }
    swap(arr, i, j);
  }
  swap(arr, pivotIndex, j);
  return j;
};

var quickSort = function(arr, left, right){
  if (left === undefined){
    left = 0;
  }
  if (right === undefined){
    right = arr.length - 1;
  }
  if (left >= right){
    return;
  }
  var pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
};

var data = [3, 4, 5, 1, 2];
quickSort(data);
console.log(data);
