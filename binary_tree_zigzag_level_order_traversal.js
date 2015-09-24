'use strict';

var zigzagLevelOrder = function(root) {
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
    .map(function(key, i){
      if (i % 2 === 0){
        return output[key];
      }else{
        return output[key].reverse();
      }
    });
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var treeNode;

data = [3, 9, 20, null, null, 15, 7];
treeNode = new TreeNode(data);
console.log(zigzagLevelOrder(treeNode));
