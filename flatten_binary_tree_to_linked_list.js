'use strict';

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var flatten = function(root){
  if (!root){
    return;
  }
  flatten(root.left);
  flatten(root.right);
  var leftTail;
  if (root.left && root.right){
    var tmp = root.right;
    root.right = root.left;
    leftTail = root.left;
    while (leftTail.right){
      leftTail = leftTail.right;
    }
    leftTail.right = tmp;
    root.left = null;
  }else if (root.left){
    root.right = root.left;
    leftTail = root.left;
    while (leftTail.right){
      leftTail = leftTail.right;
    }
    leftTail.right = null;
    root.left = null;
  }
};

var data;
var treeNode;

data = [1, 2, 5, 3, 4, null, 6];
treeNode = new TreeNode(data);
treeNode.clearNull();
console.log(treeNode.bfs());
console.log(treeNode.dfs());
flatten(treeNode);
console.log(treeNode.bfs());
console.log(treeNode.dfs());
console.log(treeNode.height());

data = [1, 2];
treeNode = new TreeNode(data);
treeNode.clearNull();
console.log(treeNode.bfs());
console.log(treeNode.dfs());
flatten(treeNode);
console.log(treeNode.bfs());
console.log(treeNode.dfs());

data = [1, 2, null, 3];
treeNode = new TreeNode(data);
treeNode.clearNull();
console.log(treeNode.bfs());
console.log(treeNode.dfs());
flatten(treeNode);
console.log(treeNode.bfs());
console.log(treeNode.dfs());

data = [1, null, 2, 3];
treeNode = new TreeNode(data);
treeNode.clearNull();
console.log(treeNode.bfs());
console.log(treeNode.dfs());
flatten(treeNode);
console.log(treeNode.bfs());
console.log(treeNode.dfs());
