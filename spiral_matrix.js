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
    var m_max = matrix.length;
    var m_min = 0;
    var n_max = matrix[0].length;
    var n_min = 0;
    var x = 0;
    var y = 0;
    var deltaX;
    var deltaY;
    var output = [];
    for (var i = 0 ; i <  matrix.length * matrix[0].length; i ++){
        // console.log('i, matrix[y][x] = ' + i + ', ' + matrix[y][x]);
        output.push(matrix[y][x]);
        if (x === n_min && y === m_min){
            deltaX = 1;
            deltaY = 0;
            n_max -= 1;
        }else if (x === n_max && y === m_min){
            deltaX = 0;
            deltaY = 1;
            m_max -= 1;
        }else if (x === n_max && y === m_max){
            deltaX = -1;
            deltaY = 0;
            // n_min += 1;
        }else if (x === n_min && y === m_max){
            deltaX = 0;
            deltaY = -1;
            m_min += 1;
            // m_max -= 1;
            // n_min += 1;
            // n_max -= 1;
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
// console.log(genMatric(5));
