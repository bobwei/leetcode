'use strict';

var majorityElement = function(nums) {
  var m1Index;
  var m1Count = 0;
  var m2Index;
  var m2Count = 0;
  var i;
  for ( i = 0 ; i < nums.length ; i++ ){
    if (nums[i] === nums[m1Index]){
      m1Count += 1;
    }else if (nums[i] === nums[m2Index]){
      m2Count += 1;
    }else if (m1Count === 0){
      m1Index = i;
      m1Count = 1;
    }else if (m2Count === 0){
      m2Index = i;
      m2Count = 1;
    }else{
      m1Count -= 1;
      m2Count -= 1;
    }
  }
  m1Count = 0;
  m2Count = 0;
  for ( i = 0 ; i < nums.length ; i++ ){
    if (nums[i] === nums[m1Index]){
      m1Count += 1;
    }else if (nums[i] === nums[m2Index]){
      m2Count += 1;
    }
  }
  var output = [];
  if (m1Count > nums.length / 3){
    output.push(nums[m1Index]);
  }
  if (m2Count > nums.length / 3){
    output.push(nums[m2Index]);
  }
  return output;
};

var data;

data = [0, 0, 0, 1, 2, 3, 4];
console.log(majorityElement(data));

data = [1, 1, 2];
console.log(majorityElement(data));

data = [0, 0, 0, 1, 1, 1, 4];
console.log(majorityElement(data));
