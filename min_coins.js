/*
  http://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/
*/

'use strict';

var findMinCoins = function(coins, N){
  var output = {};
  coins.forEach(function(coin, k){
    output['0' + ',' + k] = 1;
  });
  for ( var i = 1 ; i < N+1 ; i++ ){
    for ( var j = 0 ; j < coins.length ; j++ ){
      var x = (i - coins[j] >= 0) ? output[(i - coins[j]) + ',' + j] : 0;
      var y = (j - 1 >= 0) ? output[i + ',' + (j - 1)] : 0;
      output[i + ',' + j] = x + y;
    }
  }
  return output;
};

var coins = [1, 2, 3];
var N = 5;
console.log(findMinCoins(coins, N));
