'use strict';

var isUgly = function(num) {
  if (num % 2 > 0 && num % 3 > 0 && num % 5 > 0 && num !== 1 || num <= 0){
    return false;
  }
  while (num > 1){
    if (num % 2 === 0){
      num = num / 2;
    }else if (num % 3 === 0){
      num = num / 3;
    }else if (num % 5 === 0){
      num = num / 5;
    }else{
      return false;
    }
  }
  return true;
};


console.log(isUgly(77));
console.log(isUgly(14));
console.log(isUgly(18));
console.log(isUgly(1));
console.log(isUgly(-2147483648));
console.log(isUgly(0));
