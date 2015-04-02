/**
 * @param {number[][]} obstacleGrid
 * @returns {number}
 */

/*
    [
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ]
*/

var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    var results = {
        '-1': {}
    };
    for ( var j = 0 ; j < n ; j++){
        results['-1'][j] = 0;
    }
    for ( var i = 0 ; i < m ; i++){
        results[i] = {
            '-1': 0
        };
    }
    results['0']['0'] = 1;
    for ( var i = 0 ; i < m ; i++ ){
        for ( var j = 0 ; j < n ; j++ ){
            if (obstacleGrid[i][j]){
                results[i][j] = 0;
            }else{
                if (i === 0 && j === 0){
                    continue;
                }
                results[i][j] = results[i-1][j] + results[i][j-1];
            }
        }
    }

    return results[m-1][n-1];
};

// var obstacleGrid = [
//     [0,0,0],
//     [0,1,0],
//     [0,0,0]
// ];
var obstacleGrid = [
    [1]
];

console.log(uniquePathsWithObstacles(obstacleGrid))
