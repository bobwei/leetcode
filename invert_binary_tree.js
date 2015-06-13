'use strict';

var bst = require('./bst');
var TreeNode = bst.TreeNode;

var data = [4, 2, 7, 1, 3, 6, 9];
var root = new TreeNode(data.shift());
data.forEach(function(val){
  root.insert(val);
});

var invertTree = function(root){
  if (!root){
    return root;
  }
  var queue = [root];
  while (queue.length){
    var node = queue.shift();
    if (node.left){
      queue.push(node.left);
    }
    if (node.right){
      queue.push(node.right);
    }
    var tmp = node.left;
    node.left = node.right;
    node.right = tmp;
  }
  return root;
};
console.log('bfs : ');
root.bfs();
invertTree(root);
console.log('inverted bfs : ');
root.bfs();
