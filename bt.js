'use strict';

var TreeNode = function(val){
  this.left = this.right = null;
  if (val instanceof Array){
    this.val = val.shift();
    var that = this;
    val.forEach(function(obj){
      that.insert(obj);
    });
  }else{
    this.val = val;
  }
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
  var output = [];
  var stack = [this];
  while (stack.length){
    var node = stack.pop();
    if (node.right){
      stack.push(node.right);
    }
    if (node.left){
      stack.push(node.left);
    }
    output.push(node.val);
  }
  return output;
};

TreeNode.prototype.bfs = function(){
  var output = [];
  var queue = [this];
  while (queue.length){
    var node = queue.shift();
    if (node.left){
      queue.push(node.left);
    }
    if (node.right){
      queue.push(node.right);
    }
    output.push(node.val);
  }
  return output;
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

TreeNode.prototype.height = function(){
  var height = 0;
  var queue = [{
    height: 0,
    node: this
  }];
  while (queue.length){
    var current = queue.shift();
    if (current.node.left){
      queue.push({
        height: current.height + 1,
        node: current.node.left
      });
    }
    if (current.node.right){
      queue.push({
        height: current.height + 1,
        node: current.node.right
      });
    }
    height = Math.max(height, current.height);
  }
  return height;
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
