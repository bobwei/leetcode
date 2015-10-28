var minPathSum = function(grid) {
  'use strict';
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  let output = [0];
  for (let i = 1; i < grid[0].length ; i++) {
    output.push(Infinity);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (j === 0) {
        output[j] = output[j] + grid[i][j];
      }else {
        output[j] = Math.min(output[j - 1], output[j]) + grid[i][j];
      }
    }
  }
  return output[grid[0].length - 1];
};

var data;

data = [
  [1, 7, 2],
  [3, 1, 0],
  [5, 4, 3]
]
console.log(minPathSum(data));

data = []
console.log(minPathSum(data));

data = [[]]
console.log(minPathSum(data));
