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
