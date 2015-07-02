/* jshint loopfunc:true */

'use strict';

var minimumTotal = function(triangle){
  var output = {
    '0': triangle[0][0]
  };
  var minimum = output['0'];
  for ( var n = 1 ; n < triangle.length ; n++ ){
    var clonedOutput = {};
    Object.keys(output).forEach(function(key){
      clonedOutput[key] = output[key];
    });
    var rowMinimum = Infinity;
    for ( var i = 0 ; i < triangle[n].length ; i++ ){
      var left = (i - 1 >= 0) ? clonedOutput[i - 1] : Infinity ;
      var right = (i < triangle[n - 1].length) ? clonedOutput[i] : Infinity ;

      output[i] = Math.min(left, right) + triangle[n][i];
      rowMinimum = Math.min(rowMinimum, output[i]);
    }
    minimum = rowMinimum;
  }
  return minimum;
};

var data;
data = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
];
console.log(minimumTotal(data));

data = [
     [-10]
];
console.log(minimumTotal(data));
