'use strict';

var TreeNode = function(val){
  this.val = val;
  this.left = this.right = null;
};

TreeNode.prototype.insert = function(val){
  var current = this;

  while (true){
    if (val < current.val){
      if (current.left){
        current = current.left;
      }else{
        current.left = new TreeNode(val);
        break;
      }
    }else if (val > current.val){
      if (current.right){
        current = current.right;
      }else{
        current.right = new TreeNode(val);
        break;
      }
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
