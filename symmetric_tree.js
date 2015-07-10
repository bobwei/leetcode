'use strict';

var isArraySymmetric = function(array){
  for( var i = 0 ; i < array.length / 2 ; i++ ){
    if (array[i] !== array[array.length - 1 - i]){
      return false;
    }
  }
  return true;
};

var isSymmetric = function(root) {
  if (!root){
    return true;
  }
  var queue = [{
    node: root,
    level: 0
  }];
  var levelQueue = {
    '0': [root.val]
  };
  while (queue.length){
    var current = queue.shift();
    var nextLevel = current.level + 1;
    if (!levelQueue[nextLevel]){
      levelQueue[nextLevel] = [];
    }
    var leftVal = (current.node.left) ? current.node.left.val : current.node.left ;
    var rightVal = (current.node.right) ? current.node.right.val : current.node.right ;
    levelQueue[nextLevel].push(leftVal);
    levelQueue[nextLevel].push(rightVal);
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
  }
  return Object.keys(levelQueue).every(function(key){
    return isArraySymmetric(levelQueue[key]);
  });
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var rootNode;

data = [1, 2, 2, 3, 4, 4, 3];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
rootNode.clearNull();
console.log(isSymmetric(rootNode));

console.log(isSymmetric(null));

data = [1, 2];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
rootNode.clearNull();
console.log(isSymmetric(rootNode));
