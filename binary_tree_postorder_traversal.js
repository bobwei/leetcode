'use strict';

var postorderTraversal = function(root) {
  var output = [];
  if (!root || root.val === null){
    return output;
  }
  var left = postorderTraversal(root.left);
  var right = postorderTraversal(root.right);
  output = output.concat(
    left,
    right,
    [root.val]
  );
  return output;
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data = [1, null, 2, 3];
var rootNode = new TreeNode(data.shift());
data.forEach(function(val){
    rootNode.insert(val);
});
rootNode.bfs();
console.log(postorderTraversal(rootNode));
