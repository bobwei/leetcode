'use strict';

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var buildFunc = function(preorder, inorder, m, n, p, q) {
  // console.log(m, n, p, q);
  if (q - p === 1){
    return new TreeNode(inorder[p]);
  }else if (q - p === 0){
    return null;
  }
  var rIndex = inorder.indexOf(preorder[m]);
  var leftTree = buildFunc(
    preorder, inorder,
    m + 1, m + 1 + (rIndex - p),
    p, rIndex
  );
  var rightTree = buildFunc(
    preorder, inorder,
    m + (rIndex - p) + 1, n,
    rIndex + 1, q
  );
  var rootNode = new TreeNode(preorder[m]);
  rootNode.left = leftTree;
  rootNode.right = rightTree;
  return rootNode;
};

var buildTree = function(preorder, inorder){
  return buildFunc(
    preorder, inorder,
    0, preorder.length,
    0, inorder.length
  );
};


var data;
var treeNode;
var resultNode;

data = [1, 2, 3, 4, 5, 6, 7];
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
