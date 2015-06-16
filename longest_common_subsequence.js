/* jshint loopfunc:true */

'use strict';

var longestCommonSubsequence = function(str1, str2){
  // key = i,j
  var results = {
    '-1,-1': 0
  };
  var i, j;

  for ( i = 0 ; i < str1.length ; i++ ){
    results[i + ',' + -1] = 0;
  }
  for ( j = 0 ; j < str2.length ; j++ ){
    results[-1 + ',' + j] = 0;
  }
  for ( i = 0 ; i < str1.length ; i++ ){
    for ( j = 0 ; j < str2.length ; j++ ){
      if (str1[i] !== str2[j]){
        results[i + ',' + j] = Math.max(
          results[(i - 1) + ',' + j],
          results[i + ',' + (j - 1)]
        );
      }else{
        results[i + ',' + j] = results[(i - 1) + ',' + (j - 1)] + 1;
      }
    }
  }

  var sequence = [];
  i = str1.length - 1;
  j = str2.length - 1;
  while (i >= 0 && j >= 0){
    if (results[(i - 1) + ',' + j] === results[i + ',' + (j - 1)]){
      sequence.push(str1[i]);
      i -= 1;
      j -= 1;
    }else if (results[i + ',' + j] === results[(i - 1) + ',' + j]){
      i -= 1;
    }else if (results[i + ',' + j] === results[i + ',' + (j - 1)]){
      j -= 1;
    }
  }
  return sequence.reverse().join('');
};

var str1 = 'ABAZDC';
var str2 = 'BACBAD';
console.log(longestCommonSubsequence(str1, str2));
