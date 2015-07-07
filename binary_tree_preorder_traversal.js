'use strict';

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var preorderTraversal = function(root) {
  var output = [];
  if (!root){
    return output;
  }
  var stack = [root];
  while(stack.length){
    var current = stack.pop();
    output.push(current.val);
    if (current.right && current.right.val){
      stack.push(current.right);
    }
    if (current.left && current.left.val){
      stack.push(current.left);
    }
  }
  return output;
};

var data = [1, null, 2, 3];
var rootNode = new TreeNode(data.shift());
data.forEach(function(val){
  rootNode.insert(val);
});
console.log(preorderTraversal(rootNode));
