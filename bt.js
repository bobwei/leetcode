'use strict';

var TreeNode = function(val){
  this.val = val;
  this.left = this.right = null;
};

TreeNode.prototype.insert = function(val){
  var queue = [this];
  while (queue.length){
    var node = queue.shift();
    if (node.val === null){

    }else if (node.left === null){
      node.left = new TreeNode(val);
      break;
    }else if (node.right === null){
      node.right = new TreeNode(val);
      break;
    }else{
      queue.push(node.left);
      queue.push(node.right);
    }
  }
};

TreeNode.prototype.dfs = function(){
  var stack = [this];
  while (stack.length){
    var node = stack.pop();
    if (node.right){
      stack.push(node.right);
    }
    if (node.left){
      stack.push(node.left);
    }
    console.log(node.val);
  }
};

TreeNode.prototype.bfs = function(){
  var queue = [this];
  while (queue.length){
    var node = queue.shift();
    if (node.left){
      queue.push(node.left);
    }
    if (node.right){
      queue.push(node.right);
    }
    console.log(node.val);
  }
};

TreeNode.prototype.clearNull = function(){
  var stack = [this];
  while (stack.length){
    var current = stack.pop();
    if (current.right === null || current.right.val === null){
      current.right = null;
    }else{
      stack.push(current.right);
    }
    if (current.left === null || current.left.val === null){
      current.left = null;
    }else{
      stack.push(current.left);
    }
  }
};

var TreeNodeTest = function(){
  var data = [3, 1, 6, 4, 7, 5];
  var root = new TreeNode(data.shift());
  data.forEach(function(val){
    root.insert(val);
  });
  console.log('dfs');
  root.dfs();
  console.log('bfs');
  root.bfs();
};

module.exports.TreeNode = TreeNode;
module.exports.TreeNodeTest = TreeNodeTest;
