'use strict';

var TreeNode = function(key){
  this.key = key;
  this.left = this.right = null;
};

TreeNode.prototype.insert = function(key){
  var current = this;

  while (true){
    if (key < current.key){
      if (current.left){
        current = current.left;
      }else{
        current.left = new TreeNode(key);
        break;
      }
    }else if (key > current.key){
      if (current.right){
        current = current.right;
      }else{
        current.right = new TreeNode(key);
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
    console.log(node.key);
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
    console.log(node.key);
  }
};


var data = [3, 1, 6, 4, 7, 5];
var root = new TreeNode(data.shift());
data.forEach(function(key){
  root.insert(key);
});
console.log('dfs');
root.dfs();
console.log('bfs');
root.bfs();
