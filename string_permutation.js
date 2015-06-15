/* jshint loopfunc: true */

'use strict';

var getStringPermutations = function(str){
  var outputSet = new Set();
  var chars = str.split('');
  for ( var i = 0 ; i < Math.pow(2, str.length) ; i++ ){
    var permutation = [];
    chars.forEach(function(char, j){
      if (i % Math.pow(2, j + 1) > Math.pow(2, j) - 1){
        permutation.push(char.toUpperCase());
      }else{
        permutation.push(char.toLowerCase());
      }
    });
    outputSet.add(permutation.join(''));
  }
  var output = [];
  outputSet.forEach(function(key){
    output.push(key);
  });
  return output;
};

console.log(getStringPermutations('abcdefg0').length);
