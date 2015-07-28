'use strict';

/*
  f(n) = max(f(n - 1) + arr[n], arr[n])
 */

var maximumSubarray = function(arr){
  var output = [arr[0]];
  var tmpStart;
  var maximum = output[0];
  var start = 0;
  var end = 0;
  for ( var i = 1 ; i < arr.length ; i++ ){
    output[i] = Math.max(
      output[i - 1] + arr[i],
      arr[i]
    );
    if (arr[i] > output[i - 1] + arr[i]){
      tmpStart = i;
    }
    if (output[i] > maximum){
      start = tmpStart;
      end = i;
    }
    maximum = Math.max(maximum, output[i]);
  }
  return maximum;
};


var data;

data = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
console.log(maximumSubarray(data));

data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maximumSubarray(data));

data = [1];
console.log(maximumSubarray(data));

data = [-1];
console.log(maximumSubarray(data));
