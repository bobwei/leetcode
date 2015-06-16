/* jshint loopfunc:true */

'use strict';

var longestCommonPrefix = function(strs){
  if (!strs.length){
    return '';
  }

  var prefix = '';
  while (prefix.length < strs[0].length){
    prefix = strs[0].slice(0, prefix.length + 1);
    if (strs.every(function(str){
      return str.slice(0, prefix.length) === prefix;
    })){

    }else{
      prefix = prefix.slice(0, -1);
      break;
    }
  }
  return prefix;
};

var data = ['abss', 'abscxyz', 'absscddd'];
console.log(longestCommonPrefix(data));
