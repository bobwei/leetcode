'use strict';

var rob = function(nums){
  if (!nums.length){
    return 0;
  }
  var output = [
    nums[0],
    Math.max(nums[0], nums[1])
  ];
  for ( var i = 2 ; i < nums.length ; i++ ){
    output[i] = Math.max(
      output[i - 2] + nums[i],
      output[i - 1]
    );
  }
  return output[nums.length - 1];
};

var data;

data = [4, 1, 3, 4, 5];
console.log(rob(data));
