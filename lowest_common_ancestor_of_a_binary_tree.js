'use strict';

var lowestCommonAncestor = function(root, p, q) {
  if (!root){
    return root;
  }
  if (root === p || root === q){
    return root;
  }
  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);
  return (left && right) ? root : left || right ;
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var treeNode;

data = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
treeNode = new TreeNode(data);
treeNode.clearNull();
console.log(treeNode.bfs());
console.log(
  lowestCommonAncestor(
    treeNode,
    treeNode.left,
    treeNode.left.right.right
  ).val
);
console.log('');

data = [37,-34,-48,null,-100,-100,48,null,null,null,null,-54,null,-71,-22,null,null,null,8];
treeNode = new TreeNode(data);
treeNode.clearNull();
console.log(treeNode.bfs());
console.log(
  lowestCommonAncestor(
    treeNode,
    treeNode.right.left,
    treeNode.right.right.left.left
  ).val
);
