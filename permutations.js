'use strict';

var permute = function(nums) {
  if (nums.length === 1){
    return [nums];
  }
  var output = [];
  nums.forEach(function(num, i){
    var subnums = nums.slice();
    subnums.splice(i, 1);
    var subpermutations = permute(subnums);
    output = output.concat(
      subpermutations.map(function(subpermutation){
        return [num].concat(subpermutation);
      })
    );
  });
  return output;
};

var data;

data = [1, 2, 3, 4, 5, 6];
console.log(permute(data));
