'use strict';

var maxDepth = function(root) {
  if (!root){
    return 0;
  }
  var queue = [{
    node: root,
    level: 1
  }];
  var maximumDepth = -Infinity;
  while (queue.length){
    var current = queue.shift();
    if (current.node.left){
      queue.push({
        node: current.node.left,
        level: current.level + 1
      });
    }
    if (current.node.right){
      queue.push({
        node: current.node.right,
        level: current.level + 1
      });
    }
    if (!current.node.left && !current.node.right){
      maximumDepth = Math.max(maximumDepth, current.level);
    }
  }
  return maximumDepth;
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var rootNode;

data = [1, 2, 3, 4, 5, 6, 7];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
console.log(maxDepth(rootNode));
