'use strict';

var hasCycle = function(graph, start){
  var stack = [[start]];
  var visted = {};
  var currentPath;
  var currentNode;
  var tmpPath;
  var childNode;
  while (stack.length){
    currentPath = stack.pop();
    currentNode = currentPath.slice(-1)[0];
    for ( var i = 0 ; i < graph[currentNode].length ; i++ ){
      childNode = graph[currentNode][i];
      if (!visted[childNode]){
        tmpPath = currentPath.slice();
        tmpPath.push(childNode);
        stack.push(tmpPath);
      }else{
        // if visited && not parent => has cycle
        if (childNode !== currentPath.slice(-2)[0]){
          return true;
        }
      }
    }
    visted[currentNode] = true;
  }
  return false;
};

var data;

data = {
  1: [2, 3, 5],
  2: [1, 4],
  3: [1],
  4: [2, 5],
  5: [1, 4]
};

console.log(hasCycle(data, 1));
