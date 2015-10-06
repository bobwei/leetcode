'use strict';

var wordPattern = function(pattern, str){
  var splitStr = str.split(' ');
  if (pattern.length !== splitStr.length){
    return false;
  }
  var hash = {};
  var valueSet = new Set();
  for ( var i = 0 ; i < pattern.length ; i++ ){
    var p = pattern[i];
    if ((hash[p] && hash[p] !== splitStr[i]) ||
      (!hash[p] && valueSet.has(splitStr[i]))){
      return false;
    }
    hash[p] = splitStr[i];
    valueSet.add(splitStr[i]);
  }
  return true;
};

var data;

data = ['abba', 'dog cat cat dog'];
console.log(wordPattern(data[0], data[1]));

data = ['abba', 'dog cat cat fish'];
console.log(wordPattern(data[0], data[1]));

data = ['aaaa', 'dog cat cat dog'];
console.log(wordPattern(data[0], data[1]));

data = ['abba', 'dog dog dog dog'];
console.log(wordPattern(data[0], data[1]));

data = ['aaa', 'aa aa aa aa'];
console.log(wordPattern(data[0], data[1]));
