'use strict';

var swap = function(arr, i, j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

var bubbleSort = function(arr){
  var output = arr.slice();
  for ( var i = 0 ; i < output.length ; i++ ){
    if (output[i] > output[i + 1]){
      swap(output, i, i + 1);
      var j = i;
      while (output[j] < output[j - 1]){
        swap(output, j, j - 1);
        j -= 1;
      }
    }
  }
  return output;
};

var data = [7, 6, 5, 4, 3, 2, 1, 10];
console.log(bubbleSort(data));
