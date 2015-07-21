'use strict';

var swap = function(node1, node2){
  var tmp = node1.val;
  node1.val = node2.val;
  node2.val = tmp;
};

var recoverTree = function(root) {
  var nodes = [];
  var stack = [];
  var current = root;
  while (current || stack.length){
    if (current){
      stack.push(current);
      current = current.left;
    }else{
      var node = stack.pop();
      nodes.push(node);
      if (node.right){
        current = node.right;
      }
    }
  }
  var toSwapNodes = nodes.filter(function(node, i){
    if (i === 0){
      return node.val > nodes[i + 1].val;
    }else if (i === nodes.length - 1){
      return node.val < nodes[i - 1].val;
    }
    return node.val < nodes[i - 1].val || node.val > nodes[i + 1].val;
  });
  swap(toSwapNodes[0], toSwapNodes[toSwapNodes.length - 1]);
};

var bst = require('./bst');
var TreeNode = bst.TreeNode;

var data;
var rootNode;
var tmp;


console.log('\ntest');
data = [4, 2, 6, 1, 3, 5, 7];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
console.log('origin =', rootNode.inOrder());
tmp = rootNode.left.val;
rootNode.left.val = rootNode.right.val;
rootNode.right.val = tmp;
console.log('modified =', rootNode.inOrder());
recoverTree(rootNode);
console.log('recoverTree =', rootNode.inOrder());


console.log('\ntest');
data = [2, 1, 3];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
console.log('origin =', rootNode.inOrder());
tmp = rootNode.left.val;
rootNode.left.val = rootNode.right.val;
rootNode.right.val = tmp;
console.log('modified =', rootNode.inOrder());
recoverTree(rootNode);
console.log('recoverTree =', rootNode.inOrder());


console.log('\ntest');
data = [2, 1, 3];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
console.log('origin =', rootNode.inOrder());
tmp = rootNode.val;
rootNode.val = rootNode.left.val;
rootNode.left.val = tmp;
console.log('modified =', rootNode.inOrder());
recoverTree(rootNode);
console.log('recoverTree =', rootNode.inOrder());


console.log('\ntest');
data = [1, 3];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
console.log('origin =', rootNode.inOrder());
tmp = rootNode.left;
rootNode.left = rootNode.right;
rootNode.right = tmp;
console.log('modified =', rootNode.inOrder());
recoverTree(rootNode);
console.log('recoverTree =', rootNode.inOrder());


console.log('\ntest');
data = [1, 0, 2, 3];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
console.log('origin =', rootNode.inOrder());
tmp = rootNode.val;
rootNode.val = rootNode.right.val;
rootNode.right.val = tmp;
console.log('modified =', rootNode.inOrder());
recoverTree(rootNode);
console.log('recoverTree =', rootNode.inOrder());
