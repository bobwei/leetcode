'use strict';

var DFS = function(graph, start){
  var output = [];
  var stack = [[start]];
  var visited = {};
  var currentPath;
  var currentNode;
  var tempPath;
  var nextPaths;
  while (stack.length){
    currentPath = stack.pop();
    currentNode = currentPath.slice(-1)[0];
    nextPaths = [];
    graph[currentNode].forEach(function(childNode){
      if (!visited[childNode]){
        tempPath = currentPath.slice();
        tempPath.push(childNode);
        nextPaths.push(tempPath);
      }
    });
    visited[currentNode] = true;
    if (nextPaths.length){
      nextPaths.forEach(function(nextPath){
        stack.push(nextPath);
      });
    }else{
      output.push(currentPath);
    }
  }
  return output;
};

var data;

data = {
  1: [2, 3, 5],
  2: [1, 4],
  3: [1],
  4: [2],
  5: [1]
};
console.log(DFS(data, 1));
