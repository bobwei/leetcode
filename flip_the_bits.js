var flip = function(arr) {
  var theArr = arr
    .slice()
    .map(function(obj){
      return (obj) ? obj: -1;
    });
  var min = Infinity;
  var minIndex;
  for (var i = 1; i < theArr.length; i++) {
    theArr[i] = Math.min(theArr[i - 1] + theArr[i], theArr[i]);
    if (theArr[i] < min) {
      min = theArr[i];
      minIndex = i;
    }
  }
  var j = minIndex;
  while (theArr[j] < 0) {
    j -= 1;
  }
  for (var k = j + 1; k <= minIndex; k++) {
    arr[k] = (arr[k]) ? 0: 1;
  }
  return arr.reduce(function(s, v){
    return s + v;
  }, 0);
};

console.log(flip([1, 0, 0, 1, 0, 0, 1, 0]));
console.log(flip([1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1]));
