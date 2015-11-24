var isPalindrome = function(s) {
  'use strict';
  var str = s
    .split('')
    .map(function(char) {
      return char.toLowerCase();
    })
    .filter(function(char) {
      var charCode = char.charCodeAt(0);
      return charCode >= 97 && charCode <= 122 ||
             charCode >= 48 && charCode <= 57;
    })
  var length = str.length;
  return str
    .every(function(char, i) {
      return str[i] === str[length - 1 - i];
    });
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(''));
console.log(isPalindrome('1a2'));
