'use strict';

var sumNumbers = function(root) {
  if (!root){
    return 0;
  }
  var paths = [];
  var stack = [[root]];
  while (stack.length){
    var currentPath = stack.pop();
    var current = currentPath.slice(-1)[0];
    var tmpPath;
    if (current.right){
      tmpPath = currentPath.slice();
      tmpPath.push(current.right);
      stack.push(tmpPath);
    }
    if (current.left){
      tmpPath = currentPath.slice();
      tmpPath.push(current.left);
      stack.push(tmpPath);
    }
    if (!current.left && !current.right){
      paths.push(currentPath);
    }
  }
  return paths
    .map(function(path){
      // '1', '2', '3' => '123' => 123
      var strVal = path
        .map(function(node){
          return node.val;
        })
        .join('');
      return parseInt(strVal);
    })
    .reduce(function(s, v){
      return s + v;
    }, 0);
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var rootNode;

data = [1, 2, 3, 4, 5, 6, 7];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
console.log(sumNumbers(rootNode));
