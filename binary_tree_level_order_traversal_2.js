'use strict';

var levelOrderBottom = function(root) {
  if (!root){
    return [];
  }
  var queue = [{
    level: 0,
    node: root
  }];
  var output = {};
  while (queue.length){
    var current = queue.shift();
    if (!output[current.level]){
      output[current.level] = [];
    }
    output[current.level].push(current.node.val);
    if (current.node.left){
      queue.push({
        level: current.level + 1,
        node: current.node.left
      });
    }
    if (current.node.right){
      queue.push({
        level: current.level + 1,
        node: current.node.right
      });
    }
  }
  return Object
    .keys(output)
    .map(function(key){
      return output[key];
    })
    .reverse();
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var treeNode;

data = [3, 9, 20, null, null, 15, 7];
treeNode = new TreeNode(data);
treeNode.clearNull();
console.log(levelOrderBottom(treeNode));
