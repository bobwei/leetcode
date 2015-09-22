'use strict';

var countNodes = function(root) {
  if (!root){
    return 0;
  }
  var left = root;
  var leftDepth = 0;
  while (left.left){
    left = left.left;
    leftDepth += 1;
  }
  var right = root;
  var rightDepth = 0;
  while (right.right){
    right = right.right;
    rightDepth += 1;
  }
  if (leftDepth === rightDepth){
    return Math.pow(2, rightDepth + 1) - 1;
  }
  return countNodes(root.left) + countNodes(root.right) + 1;
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var treeNode;

data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
treeNode = new TreeNode(data);
console.log(countNodes(treeNode));
