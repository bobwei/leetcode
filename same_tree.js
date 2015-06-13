'use strict';

var bst = require('./bst');
var TreeNode = bst.TreeNode;

var data = [4, 2, 0];
var root1 = new TreeNode(data.shift());
data.forEach(function(val){
  root1.insert(val);
});
console.log('root1.bfs()');
root1.bfs();
data = [4, 2, 1, 5, 6];
var root2 = new TreeNode(data.shift());
data.forEach(function(val){
  root2.insert(val);
});
console.log('root2.bfs()');
root2.bfs();

var isSameTree = function(p, q) {
  if (p === q && p === null){
    return true;
  }

  if (p && q){
    return isSameTree(p.left, q.left) &&
          isSameTree(p.right, q.right) &&
          p.val === q.val;
  }

  return false;
};
console.log('isSameTree(root1, root2)', isSameTree(root1, root2));
console.log('isSameTree(root1, root1)', isSameTree(root1, root1));
