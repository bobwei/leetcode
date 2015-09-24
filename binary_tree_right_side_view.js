'use strict';

var rightSideView = function(root) {
  if (!root){
    return [];
  }
  var output = {};
  var queue = [{
    depth: 0,
    node: root
  }];
  while (queue.length){
    var current = queue.shift();
    if (!output[current.depth]){
      output[current.depth] = [];
    }
    output[current.depth].push(current.node.val);
    if (current.node.left){
      queue.push({
        depth: current.depth + 1,
        node: current.node.left
      });
    }
    if (current.node.right){
      queue.push({
        depth: current.depth + 1,
        node: current.node.right
      });
    }
  }
  return Object
    .keys(output)
    .map(function(key){
      return output[key].slice(-1)[0];
    });
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var treeNode;

data = [1, 2, 3, null, 5, null, 4];
treeNode = new TreeNode(data);
console.log(rightSideView(treeNode));
