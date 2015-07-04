'use strict';

var pathSum = function(root, sum){
  if (!root){
    return [];
  }
  var output = [];
  var stack = [[root]];
  while (stack.length){
    var path = stack.pop();
    var current = path.slice(-1)[0];
    if (current.left){
      var leftPath = path.slice();
      leftPath.push(current.left);
      stack.push(leftPath);
    }
    if (current.right){
      var rightPath = path.slice();
      rightPath.push(current.right);
      stack.push(rightPath);
    }
    if (!current.left && !current.right){
      var currentPathSum = path.reduce(function(s, v){
        return s + v.val;
      }, 0);
      if (currentPathSum === sum){
        output.push(path.map(function(obj){
          return obj.val;
        }));
      }
    }
  }
  return output;
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1];
var rootNode = new TreeNode(data.shift());
data.forEach(function(val){
  rootNode.insert(val);
});
var sum = 22;
console.log(pathSum(rootNode, sum));
