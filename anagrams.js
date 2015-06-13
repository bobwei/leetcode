'use strict';

var anagrams = function(strs) {
  var cache = {};
  strs.forEach(function(str){
    var key = str.split('').sort().join('');
    if (!cache[key]){
      cache[key] = [];
    }
    cache[key].push(str);
  });

  var output = [];
  Object.keys(cache).forEach(function(key){
    if (cache[key].length > 1){
      output = output.concat(cache[key]);
    }
  });

  return output;
};

var data = ['tsar', 'rat', 'tar', 'star', 'tars', 'cheese'];
console.log(anagrams(data));
