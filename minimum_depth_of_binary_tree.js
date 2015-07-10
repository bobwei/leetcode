'use strict';

var minDepth = function(root) {
  if (!root){
    return 0;
  }
  var queue = [{
    node: root,
    level: 1
  }];
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
      return current.level;
    }
  }
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var rootNode;

data = [1, 2, 3, 4, 5, 6, 7, 8];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
rootNode.clearNull();
console.log(minDepth(rootNode));

data = [0];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
rootNode.clearNull();
console.log(minDepth(rootNode));
