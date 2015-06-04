'use strict';

var fibonacci = function(n){
    var results = {
        '1': 1,
        '2': 2
    };

    for ( var i = 3 ; i <= n ; i++ ){
        results[i] = results[i-2] + results[i-1];
    }

    return results[n];
};

console.log(fibonacci(30));
