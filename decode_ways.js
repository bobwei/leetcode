'use strict';

var numDecodings = function(s){
  if (s.length <= 0){
    return 0;
  }
  var output = {
    '-1': 1
  };
  output[0] = (parseInt(s[0], 10) > 0) ? 1 : 0;

  for ( var i = 1 ; i < s.length ; i++ ){
    var d2 = parseInt(s.slice(i - 1, i + 1), 10);
    var d1 = parseInt(s.slice(i, i + 1), 10);
    if ((d1 > 0) && (d2 >= 10 && d2 <= 26)){
      output[i] = output[i - 1] + output[i - 2];
    }else if (d1 === 0 && (d2 >= 10 && d2 <= 26)){
      output[i] = output[i - 2];
    }else if ((d1 > 0)){
      output[i] = output[i - 1];
    }else{
      output[i] = 0;
    }
  }
  return output[s.length - 1];
};

var data;

data = '20';
console.log(numDecodings(data));

data = '121231';
console.log(numDecodings(data));

data = '';
console.log(numDecodings(data));

data = '1';
console.log(numDecodings(data));

data = '0';
console.log(numDecodings(data));

data = '10';
console.log(numDecodings(data));

data = '1000101';
console.log(numDecodings(data));

data = '1010';
console.log(numDecodings(data));
