'use strict';

var bst = require('./bst');
var TreeNode = bst.TreeNode;

var data = [5, 2, 12, -4, 3, 9, 21, 19, 25];
var root = new TreeNode(data.shift());
data.forEach(function(val){
  root.insert(val);
});
console.log('root.bfs()');
root.bfs();

console.log('root.bfs()');
root.delete(5);
root.bfs();

data = [10, 6, 18, 4, 8, 15, 21];
var root2 = new TreeNode(data.shift());
data.forEach(function(val){
  root2.insert(val);
});
console.log('root2.bfs()');
root2.bfs();
console.log('root2.findDepth()');
console.log(root2.findDepth());
