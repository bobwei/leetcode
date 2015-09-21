'use strict';

var nthUglyNumber = function(n) {
  var index_2 = 0;
  var index_3 = 0;
  var index_5 = 0;
  var results = [1];
  for ( var i = 1 ; i < n ; i++ ){
    var n2 = results[index_2] * 2;
    var n3 = results[index_3] * 3;
    var n5 = results[index_5] * 5;
    var min = Math.min(n2, n3, n5);
    if (n2 === min){
      index_2 += 1;
    }
    if (n3 === min){
      index_3 += 1;
    }
    if (n5 === min){
      index_5 += 1;
    }
    results.push(min);
  }
  return results[n - 1];
};

console.log(nthUglyNumber(10));
console.log(nthUglyNumber(11));
console.log(nthUglyNumber(100));
