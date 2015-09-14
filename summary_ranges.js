'use strict';

var summaryRanges = function(nums) {
  if (!nums || !nums.length){
    return [];
  }
  var output = [];
  var start = nums[0];
  var end = start;
  nums.forEach(function(num, i){
    if (i){
      if (num === nums[i - 1] + 1){
        end = num;
      }else{
        output.push([start, end]);
        start = num;
        end = start;
      }
    }
  });
  output.push([start, end]);
  return output
    .map(function(pair){
      if (pair[0] === pair[1]){
        return pair[0].toString();
      }
      return pair.join('->')
    });
};

var data;

data = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(data));

data = [0, 1, 2, 4, 5, 7, 8, 9, 20];
console.log(summaryRanges(data));
