'use strict';

/*

  f(n, w) = max(f(n-1, w), f(n-1, w-items[n-1].weight) + items[n-1].value)

  f(n, w) = max(
    f1(x1, y1),
    f2(x2, y2)
  )

  f(0, n) = 0
  f(x, y) = 0, if y < 0

*/

var knapsackProblem = function(items, maxWeight){
  var output = {};
  for ( var i = 1 ; i < items.length + 1 ; i++ ){
    for (var j = 0 ; j < maxWeight + 1 ; j++ ){
      var x1 = i - 1;
      var y1 = j;
      var x2 = i - 1;
      var y2 = j - items[i - 1].weight;

      var f1 = ( x1 > 0 ) ? output[(x1) + ',' + (y1)] : 0 ;
      var f2 = ( x2 > 0 && y2 > 0) ? output[(x2) + ',' + (y2)] : 0 ;

      output[i + ',' + j] = Math.max(f1, f2 + items[i - 1].value);
    }
  }
  return output[items.length + ',' + maxWeight];
};

var items;
var maxWeight;

items = [{
  value: 60,
  weight: 10
}, {
  value: 100,
  weight: 20
}, {
  value: 120,
  weight: 30
}];
maxWeight = 50;
console.log(knapsackProblem(items, maxWeight));

items = [{
  value: 10,
  weight: 1
}, {
  value: 20,
  weight: 1
}, {
  value: 30,
  weight: 1
}];
maxWeight = 2;
console.log(knapsackProblem(items, maxWeight));
