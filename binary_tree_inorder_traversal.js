'use strict';

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var inorderTraversal = function(root) {
  if (!root){
    return [];
  }
  var output = [];
  var stack = [];
  var current = root;
  while (current || stack.length){
    if (current && current.val){
      stack.push(current);
      current = current.left;
    }else{
      var node = stack.pop();
      output.push(node.val);
      if (node.right){
        current = node.right;
      }
    }
    if (current && current.val === null && !stack.length){
      break;
    }
  }
  return output;
};


var data;

data = [1, null, 2, 3];
var root = new TreeNode(data.shift());
data.forEach(function(val){
  root.insert(val);
});
console.log(inorderTraversal(root));

data = [1, 2, 3, null, null, 4, null, null, 5];
var root2 = new TreeNode(data.shift());
data.forEach(function(val){
  root2.insert(val);
});
console.log(inorderTraversal(root2));
