'use strict';

var minimumTotal = function(triangle){
  var output = {
    '0,0': triangle[0][0]
  };
  var minimum = output['0,0'];
  for ( var n = 1 ; n < triangle.length ; n++ ){
    var rowMinimum = Infinity;
    for ( var i = 0 ; i < triangle[n].length ; i++ ){
      var left = (n - 1 >= 0 && i - 1 >= 0) ?
        output[(n - 1) + ',' + (i - 1)] : Infinity ;
      var right = (n - 1 >= 0 && i >= 0 && i < triangle[n - 1].length) ?
        output[(n - 1) + ',' + (i)] : Infinity ;
      output[n + ',' + i] = Math.min(left, right) + triangle[n][i];
      rowMinimum = Math.min(rowMinimum, output[n + ',' + i]);
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
