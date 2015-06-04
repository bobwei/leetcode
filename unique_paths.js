'use strict';

/**
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
var uniquePaths = function(m, n) {
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
            if (i === 0 && j === 0){
                continue;
            }
            results[i][j] = results[i-1][j] + results[i][j-1];
        }
    }

    return results[m-1][n-1];
};

console.log(uniquePaths(30, 30));
