/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    var n = grid.length;
    if (n === 0){

        return 0;
    }
    var m = grid[0].length;
    if (m === 0){

        return 0;
    }

    var keysCount = 0;
    var islands = {};
    grid.forEach(function(row, i){
        row.forEach(function(column, j){
            var key = j + ',' + i;
            if (column){
                if (islands[key] === undefined){
                    islands[key] = keysCount;
                    keysCount++;
                }
                if (j + 1 < m){
                    var nextXKey = ( j + 1 ) + ',' + i;
                    islands[nextXKey] = islands[key];
                }
                if (i + 1 < n){
                    var nextYKey = j + ',' + ( i + 1 );
                    islands[nextYKey] = islands[key];
                }
            }else{
                delete islands[key];
            }
        });
    });

    return keysCount;
};

var data;
data =[
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]
];
console.log(numIslands(data));

data = [[0]];
console.log(numIslands(data));

data = ["0"];
console.log(numIslands(data));
