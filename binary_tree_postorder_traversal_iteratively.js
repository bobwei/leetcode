'use strict';

var postorderTraversal = function(root) {
  var output = [];
  if (!root || root.val === null){
    return output;
  }
  var stack = [root];
  var previous;
  var current;
  while (stack.length){
    current = stack.slice(-1)[0];
    // left tree and right tree are not yet traversed
    if (!previous || current === previous.left || current === previous.right){
      if (current.left && current.left.val){
        stack.push(current.left);
      }else if (current.right && current.right.val){
        stack.push(current.right);
      }else{
        stack.pop();
        output.push(current.val);
      }
    // left tree is traversed, then check right tree
    }else if (current.left === previous){
      if (current.right){
        stack.push(current.right);
      }else{
        stack.pop();
        output.push(current.val);
      }
    // right tree is traversed, then pop
    }else if (current.right === previous){
      stack.pop();
      output.push(current.val);
    }
    previous = current;
  }
  return output;
};

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data = [1, null, 2, 3];
var rootNode = new TreeNode(data.shift());
data.forEach(function(val){
    rootNode.insert(val);
});
rootNode.bfs();
console.log(postorderTraversal(rootNode));
