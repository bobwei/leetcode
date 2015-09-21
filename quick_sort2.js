'use strict';

var swap = function(arr, i, j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var quickSort = function(arr, p, q){
  if (p === undefined){
    p = 0;
  }
  if (q === undefined){
    q = arr.length - 1;
  }
  if (p >= q){
    return;
  }
  var pivotIndex = p;
  var left = pivotIndex + 1;
  var right = q;
  while (left <= right){
    while (arr[left] <= arr[pivotIndex]){
      left += 1;
    }
    while (arr[right] > arr[pivotIndex]){
      right -= 1;
    }
    if (left <= right){
      swap(arr, left, right);
    }
  }
  swap(arr, right, pivotIndex);
  pivotIndex = right;
  quickSort(arr, p, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, q);
};

var data;

data = [3, 4, 2, 1, 5];
quickSort(data);
console.log(data);

data = [3, 4, 2, 1, 5, 9, 10, 11, 7, 0, 100, 6, 13];
quickSort(data);
console.log(data);
