'use strict';

var bst = require('./bst');
var TreeNode = bst.TreeNode;

var data;
var rootNode;

data = [2, 1, 5, 9];
// data = [4, 2 ,6, 1, 3, 7]
// data = [4, 2 ,6, 1, 3, 5, 7]
// data = [4];
rootNode = new TreeNode(data);
rootNode = rootNode.delete(5);
if (rootNode){
  console.log(rootNode.bfs());
}else{
  console.log(rootNode);
}
