'use strict';

var mergeSort = function(arr){
  if (arr.length <= 1){
    return arr;
  }
  var middle = arr.length / 2;
  var sortedLeft = mergeSort(arr.slice(0, middle));
  var sortedRight = mergeSort(arr.slice(middle, arr.length));

  var output = [];

  while (sortedLeft.length && sortedRight.length){
    if (sortedLeft[0] <= sortedRight[0]){
      output.push(sortedLeft.shift());
    }else{
      output.push(sortedRight.shift());
    }
  }
  if (sortedLeft.length){
    output = output.concat(sortedLeft);
  }else if (sortedRight.length){
    output = output.concat(sortedRight);
  }

  return output;
};

var data = [2, 1, 3, 5, 6, 9, 12, 0, -1];
console.log(mergeSort(data));
