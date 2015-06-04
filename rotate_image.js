'use strict';

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
    [ [ 0, 1, 2, 3 ],
      [ 4, 5, 6, 7 ],
      [ 8, 9, 10, 11 ],
      [ 12, 13, 14, 15 ] ]
*/

var rotate = function(matrix) {
    for ( var i = 0 ; i < matrix.length ; i++ ){
        for ( var j = 0 ; j < matrix[i].length ; j++ ){
            if (j > i){
                var tmp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = tmp;
            }
        }
    }
    for ( var i = 0 ; i < matrix.length ; i++ ){
        for ( var j = 0 ; j < matrix[i].length / 2 ; j++ ){
            var tmp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix[i].length - 1 - j];
            matrix[i][matrix[i].length - 1 - j] = tmp;
        }
    }
};

var genMatrix = function(n){
    var matrix = [];
    for ( var i = 0 ; i < n ; i++ ){
        var row = [];
        for ( var j = 0 ; j < n ; j++ ){
            row.push(i * n + j);
        }
        matrix.push(row);
    }

    return matrix;
};

var matrix = genMatrix(4);
console.log(matrix);
rotate(matrix);
console.log(matrix);
