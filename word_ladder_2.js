/**
 * @param {string} start
 * @param {string} end
 * @param {set} dict
 * @return {string[][]}
 */
 /*

    start = 'hit'
    end = 'cog'
    dict = ['hot','dot','dog','lot','log']
    Return
      [
        ['hit','hot','dot','dog','cog'],
        ['hit','hot','lot','log','cog']
      ]

 */

var match = function(word1, word2){
    var diffCount = 0;
    for (var i = 0 ; i < word1.length ; i++){
        if (word1[i] !== word2[i]){
            diffCount++;
        }
        if (diffCount > 1){

            return false;
        }
    }

    return true;
};

var findLadders = function(start, end, dict) {
    var paths = [
        [start]
    ];
    var shouldBreak = false;
    var totalMatchCount;
    while(!shouldBreak){
        totalMatchCount = 0;
        paths.forEach(function(path){
            var nMatched = 0;
            word = path.slice(-1)[0];
            if (match(word, end)){
                path.push(end);
                shouldBreak = true;
            }else{
                var filteredDict = [];
                dict.slice(0).forEach(function(wordInDict){
                    if (path.slice(1).indexOf(wordInDict) < 0){
                        filteredDict.push(wordInDict);
                    }
                });

                filteredDict.forEach(function(wordInDict){
                    if (match(wordInDict, word)){
                        nMatched++;
                        totalMatchCount++;
                        if (nMatched < 2){
                            path.push(wordInDict);
                        }else{
                            var clonedPath = path.slice(0);
                            clonedPath.pop();
                            clonedPath.push(wordInDict);
                            paths.push(clonedPath);
                        }
                    }
                });
            }
        });
        if (!totalMatchCount){
            shouldBreak = true;
        }
    }

    return paths.filter(function(path){
        var lastWord = path.slice(-1)[0];

        return lastWord === end;
    });
};

var start = 'hit';
var end = 'cog';
var dict = ['hot','dot','dog','lot','log'];
// var start = 'hot';
// var end = 'dog';
// var dict = ['hot', 'dog'];
// var start = 'hit';
// var end = 'cog';
// var dict = ['hot','dot','dog','lot','log','dof','mit','sit','set','mog','mig','seg','nax','max'];
console.log(findLadders(start, end, dict));
