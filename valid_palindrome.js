var isPalindrome = function(s) {
  'use strict';
  var i = 0;
  var j = s.length - 1;
  var isAlphanumeric = function(char) {
    var charCode = char.charCodeAt(0);
    return charCode >= 65 && charCode <= 90 ||
           charCode >= 97 && charCode <= 122 ||
           charCode >= 48 && charCode <= 57;
  };
  while (i < j) {
    while (i < j && !isAlphanumeric(s[i])) {
      i += 1;
    }
    while (i < j && !isAlphanumeric(s[j])) {
      j -= 1;
    }
    if (isAlphanumeric(s[i]) && isAlphanumeric(s[j]) &&
        s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i += 1;
    j -= 1;
  }
  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(''));
console.log(isPalindrome('1a2'));
console.log(isPalindrome('.,'));
console.log(isPalindrome('a.,'));
