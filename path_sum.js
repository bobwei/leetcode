'use strict';

var hasPathSum = function(root, sum){
  if (!root){
    return false;
  }
  var stack = [root];
  while (stack.length){
    var current = stack.pop();
    if (current.left){
      current.left.val = current.val + current.left.val;
      stack.push(current.left);
    }
    if (current.right){
      current.right.val = current.val + current.right.val;
      stack.push(current.right);
    }
    if (!current.left && !current.right){
      if (sum === current.val){
        return true;
      }
    }
  }

  return false;
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
var rootNode = new TreeNode(data.shift());
data.forEach(function(val){
  rootNode.insert(val);
});
var sum = 22;
console.log(hasPathSum(rootNode, sum));
