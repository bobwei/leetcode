/**
 * @param {number[][]} matrix
 * @return {number[]
 */
/*

m rows, n columns
[
    [ 1,  2,  3,  4],
    [ 5,  6,  7,  8],
    [ 9, 10, 11, 12],
    [13, 14, 15, 16]
]

should return [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

*/
var spiralOrder = function(matrix) {
    if (!matrix.length || matrix.some(function(row){

        return !row.length;
    })){

        return matrix;
    }

    var mMax = matrix.length;
    var mMin = 0;
    var nMax = matrix[0].length - 1;
    var nMin = -1;
    var x = 0;
    var y = 0;
    var deltaX = 1;
    var deltaY = 0;
    var output = [];
    for (var i = 0 ; i <  matrix.length * matrix[0].length; i ++){
        output.push(matrix[y][x]);
        if (x === nMin && y === mMin){
            deltaX = 1;
            deltaY = 0;
            nMax -= 1;
        }else if (x === nMax && y === mMin){
            deltaX = 0;
            deltaY = 1;
            mMax -= 1;
        }else if (x === nMax && y === mMax){
            deltaX = -1;
            deltaY = 0;
            nMin += 1;
        }else if (x === nMin && y === mMax){
            deltaX = 0;
            deltaY = -1;
            mMin += 1;
        }
        x += deltaX;
        y += deltaY;
    }

    return output;
};

var genMatric = function(k){
    var rows = [];
    for (var i = 0; i < k ; i++){
        var columns = [];
        for (var j = 0; j < k ; j++){
            columns.push(i * k + j + 1);
        }
        rows.push(columns);
    }

    return rows;
};

var matrix = genMatric(5);
console.log(matrix);
console.log(spiralOrder(matrix));
