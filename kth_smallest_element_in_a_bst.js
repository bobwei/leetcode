'use strict';

var bst = require('./bst');
var TreeNode = bst.TreeNode;

var kthSmallest = function(root, k) {
  var index = 0;
  var current = root;
  var stack = [];
  while (current || stack.length){
    if (current){
      stack.push(current);
      current = current.left;
    }else{
      var node = stack.pop();
      index += 1;
      if(index === k){
        return node.val;
      }else{
        if (node.right){
          current = node.right;
        }
      }
    }
  }
};

var data = [20, 8, 22, 4, 12, 10, 14];
var rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
var k = 2;
console.log(kthSmallest(rootNode, k));
