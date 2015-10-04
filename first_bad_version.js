'use strict';

var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    var left = 1;
    var right = n;
    while (left <= right){
      var center = Math.floor((left + right) / 2);
      if (isBadVersion(center)){
        right = center - 1;
      }else{
        left = center + 1;
      }
    }
    return left;
  };
};

console.log(
  solution(function(version){
    return version >= 4;
  })(7)
);

console.log(
  solution(function(version){
    return version >= 4;
  })(1000000000)
);
