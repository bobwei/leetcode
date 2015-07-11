'use strict';

var levelOrder = function(root) {
  if (!root){
    return [];
  }
  var queue = [{
    node: root,
    level: 0
  }];
  var output = {};
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
    if (!output[current.level]){
      output[current.level] = [];
    }
    output[current.level].push(current.node.val);
  }
  return Object.keys(output).map(function(key){
    return output[key];
  });
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var rootNode;

data = [3, 9, 20, null, null, 15, 7];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
rootNode.clearNull();
console.log(levelOrder(rootNode));
