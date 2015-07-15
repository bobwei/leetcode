'use strict';

var failureFunction = function(str){
  var output = {
    '0': 0
  };
  for ( var i = 1 ; i < str.length ; i++ ){
    if (str[i] === str[output[i - 1]]){
      output[i] = output[i - 1] + 1;
    }else if (str[i] === str[0]){
      output[i] = 1;
    }else{
      output[i] = 0;
    }
  }
  return Object.keys(output).map(function(key){
    return output[key];
  }).join('');
};

var data;

data = 'aabaababb';
console.log(failureFunction(data));

data = 'abacab';
console.log(failureFunction(data));

data = 'datdadatda tt';
console.log(failureFunction(data));

data = 'abcabcacab';
console.log(failureFunction(data));

data = 'abzabc';
console.log(failureFunction(data));

data = 'ababaabab';
console.log(failureFunction(data));

data = 'abcdabd';
console.log(failureFunction(data));

data = 'ababac';
console.log(failureFunction(data));
