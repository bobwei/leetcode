'use strict';

var searchMatrix = function(matrix, target) {
  var start = 0;
  var end = matrix.length - 1;
  var mid;
  while (start <= end){
    mid = Math.floor((start + end) / 2);

    if (target < matrix[mid][0]){
      end = mid - 1;
    }else if (target === matrix[mid][0]){
      return true;
    }else if (target > matrix[mid][0]){
      start = mid + 1;
    }
  }

  var row = end;
  if (row < 0){
    return false
  }
  start = 0;
  end = matrix[row].length - 1;
  while (start <= end){
    mid = Math.floor((start + end) / 2);

    if (target < matrix[row][mid]){
      end = mid - 1;
    }else if (target === matrix[row][mid]){
      return true;
    }else if (target > matrix[row][mid]){
      start = mid + 1;
    }
  }
  return false;
};

var data, target;
data = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
target = 5;
console.log(searchMatrix(data, target));

data = [
  [1]
];
target = 1;
console.log(searchMatrix(data, target));

data = [
  [1, 3]
];
target = 3;
console.log(searchMatrix(data, target));

data = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
target = 11;
console.log(searchMatrix(data, target));

data = [
  [1]
];
target = 0;
console.log(searchMatrix(data, target));
