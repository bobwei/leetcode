'use strict';

var numIslands = function(grid) {
  var n = grid.length;
  if (!n){
    return 0;
  }
  var m = grid[0].length;
  if (!m){
    return 0;
  }
  var nIslands = 0;
  var output = {};
  for ( var i = 0 ; i < n ; i++ ){
    for ( var j = 0 ; j < m ; j++ ){
      // if it's island and not yet visited
      if (parseInt(grid[i][j], 10) > 0 && output[i + ',' + j] === undefined){
        nIslands += 1;
        var queue = [[j,i]];
        while (queue.length){
          var current = queue.shift();
          var x = current[0];
          var y = current[1];
          output[y + ',' + x] = nIslands;
          // check left
          if (x - 1 >= 0){
            if (parseInt(grid[y][x - 1], 10) > 0 &&
                output[y + ',' + (x - 1)] === undefined){
              output[y + ',' + (x - 1)] = -1;
              queue.push([x - 1, y]);
            }
          }
          // check right
          if (x + 1 < m){
            if (parseInt(grid[y][x + 1], 10) > 0 &&
                output[y + ',' + (x + 1)] === undefined){
              output[y + ',' + (x + 1)] = -1;
              queue.push([x + 1, y]);
            }
          }
          // check top
          if (y - 1 >= 0 ){
            if (parseInt(grid[y - 1][x], 10) > 0 &&
                output[(y - 1) + ',' + x] === undefined){
              output[(y - 1) + ',' + x] = -1;
              queue.push([x, y - 1]);
            }
          }
          // check bottom
          if (y + 1 < n){
            if (parseInt(grid[y + 1][x], 10) > 0 &&
                output[(y + 1) + ',' + x] === undefined){
              output[(y + 1) + ',' + x] = -1;
              queue.push([x, y + 1]);
            }
          }
        }
      }
    }
  }
  return nIslands;
};

var data;

data = [
  '11000',
  '11000',
  '00100',
  '00011'
];
console.log(numIslands(data));

data = [
  '11110',
  '11010',
  '11000',
  '00000'
];
console.log(numIslands(data));

data = [
  '111',
  '010',
  '111'
];
console.log(numIslands(data));
