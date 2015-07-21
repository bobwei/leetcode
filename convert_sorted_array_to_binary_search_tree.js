'use strict';

var bst = require('./bst');
var TreeNode = bst.TreeNode;

var sortedArrayToBST = function(nums, i, j){
  if (!nums.length){
    return null;
  }
  if (i === undefined){
    i = 0;
  }
  if (j === undefined){
    j = nums.length - 1;
  }
  if (j < i){
    return null;
  }
  var halfIndex = Math.floor((i + j) / 2);
  var treeNode = new TreeNode(nums[halfIndex]);
  if (j - i > 0){
    var leftNode = sortedArrayToBST(nums, i, halfIndex - 1);
    var rightNode = sortedArrayToBST(nums, halfIndex + 1, j);
    treeNode.left = leftNode;
    treeNode.right = rightNode;
  }
  return treeNode;
};

var data;
var rootNode;

data = [0, 1, 2, 3, 4, 5, 6, 7];
rootNode = sortedArrayToBST(data);
console.log('data = ', data);
console.log('inorder =', rootNode.inOrder());
console.log('bfs =', rootNode.bfs());
console.log('');

data = [0, 1, 2, 3, 4, 5, 6];
rootNode = sortedArrayToBST(data);
console.log('data = ', data);
console.log('inorder =', rootNode.inOrder());
console.log('bfs =', rootNode.bfs());
console.log('');

data = [];
rootNode = sortedArrayToBST(data);
console.log('data = ', data);
console.log('inorder =', rootNode);
console.log('bfs =', rootNode);
console.log('');
