'use strict';

var getPaths = function(root) {
  if (!root){
    return [];
  }
  var left = getPaths(root.left);
  var right = getPaths(root.right);
  var paths = left.concat(right);
  if (!paths.length){
    paths.push([]);
  }
  return paths
    .map(function(list){
      list.unshift(root.val);
      return list;
    });
};

var binaryTreePaths = function(root){
  return getPaths(root)
    .map(function(path){
      return path.join('->');
    });
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var treeNode;

data = [0, 1, 2, 3, 4, 5, 6];
treeNode = new TreeNode(data);
console.log(binaryTreePaths(treeNode));

data = [1];
treeNode = new TreeNode(data);
console.log(binaryTreePaths(treeNode));
