'use strict';

var lowestCommonAncestor = function(root, p, q) {
  if (!root){
    return null;
  }
  if (p.val > q.val){
    var tmp = p;
    p = q;
    q = tmp;
  }
  var current = root;
  while (current){
    if (current.val >= p.val && current.val <= q.val){
      return current.val;
    }
    if (current.val < p.val){
      current = current.right;
    }else if (current.val > q.val){
      current = current.left;
    }
  }
  return null;
};

var bst = require('./bst');
var TreeNode = bst.TreeNode;

var data;
var treeNode;

data = [3, 1, 5, 0, 2, 4, 6];
treeNode = new TreeNode(data);
console.log(lowestCommonAncestor(treeNode, new TreeNode(4), new TreeNode(6)));

data = [2, 1];
treeNode = new TreeNode(data);
console.log(lowestCommonAncestor(treeNode, new TreeNode(2), new TreeNode(1)));
