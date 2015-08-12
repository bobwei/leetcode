'use strict';

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var buildTree = function(preorder, inorder){
  // console.log(preorder, inorder);
  if (preorder.length === 1 && inorder.length === 1){
    return new TreeNode(inorder[0]);
  }else if (preorder.length === 0 && inorder.length === 0){
    return null;
  }
  var val = preorder.shift();
  var valIndexAtInorder = inorder.indexOf(val);
  inorder = [
    inorder.slice(0, valIndexAtInorder),
    inorder.slice(valIndexAtInorder + 1)
  ];
  var left = buildTree(
    preorder.slice(0, inorder[0].length),
    inorder[0]
  );
  var right = buildTree(
    preorder.slice(inorder[0].length),
    inorder[1]
  );
  var rootNode = new TreeNode(val);
  rootNode.left = left;
  rootNode.right = right;
  return rootNode;
};

var data;
var treeNode;
var resultNode;

data = [0, 1, 2, 3, 4, 5, 6];
treeNode = new TreeNode(data);
resultNode = buildTree(treeNode.preOrder(), treeNode.inOrder());
console.log(resultNode.inOrder());

data = [0, 1, null, null, 4];
treeNode = new TreeNode(data);
resultNode = buildTree(treeNode.preOrder(), treeNode.inOrder());
console.log(resultNode.inOrder());

resultNode = buildTree(
  [7, -10, -4, 3, -1, 2, -8, 11],
  [-4, -10, 3, -1, 7, 11, -8, 2]
);
console.log(resultNode.inOrder());
