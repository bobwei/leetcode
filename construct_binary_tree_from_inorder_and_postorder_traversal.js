'use strict';

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var buildFunc = function(inorder, postorder, m, n, p, q){
  if (q - p === 1){
    return new TreeNode(postorder[p]);
  }else if (q - p === 0){
    return null;
  }
  var rIndex = inorder.indexOf(postorder[q - 1]);
  var leftTree = buildFunc(inorder, postorder, m, rIndex, p, p + rIndex - m);
  var rightTree = buildFunc(inorder, postorder, rIndex + 1, n, p + rIndex - m, q - 1);
  var rootNode = new TreeNode(postorder[q - 1]);
  rootNode.left = leftTree;
  rootNode.right = rightTree;
  return rootNode;
};

var buildTree = function(inorder, postorder){
  return buildFunc(
    inorder, postorder,
    0, inorder.length,
    0, postorder.length
  );
};


var data;
var treeNode;
var resultTree;

data = [0, 1, 2, 3, 4, 5, 6];
treeNode = new TreeNode(data);
resultTree = buildTree(treeNode.inOrder(), treeNode.postOrder());
console.log(resultTree.inOrder());

data = [0, 1, 2, null, 4, null, 6, null, null, 13];
treeNode = new TreeNode(data);
resultTree = buildTree(treeNode.inOrder(), treeNode.postOrder());
console.log(resultTree.inOrder());
