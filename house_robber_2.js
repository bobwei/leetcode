'use strict';

var rob = function(nums){
  if (!nums.length){
    return 0;
  }
  if (nums.length <= 2){
    return Math.max.apply(null, nums);
  }
  var output = [
    [nums[0], Math.max(nums[0], nums[1])],
    [0, nums[1], Math.max(nums[1], nums[2])]
  ];

  // 1st element selected
  for ( var i = 2 ; i < nums.length - 1 ; i++ ){
    output[0][i] = Math.max(
      output[0][i - 1],
      output[0][i - 2] + nums[i]
    );
  }
  output[0][nums.length - 1] = output[0][nums.length - 2];

  // 1st element deselected
  for ( var j = 3 ; j < nums.length ; j++ ){
    output[1][j] = Math.max(
      output[1][j - 1],
      output[1][j - 2] + nums[j]
    );
  }

  return Math.max(
    output[0][nums.length - 1],
    output[1][nums.length - 1]
  );
};

var data;

data = [4, 1, 3, 4, 5];
console.log(rob(data));

data = [1, 1, 1];
console.log(rob(data));

data = [0];
console.log(rob(data));

data = [0, 9];
console.log(rob(data));
