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

TreeNode.prototype.findMinNode = function(){
  var current = this;
  while (current.left){
    current = current.left;
  }
  return current;
};

TreeNode.prototype.findDepth = function(){
  if (!this.left && !this.right){
    return 0;
  }

  return Math.max(this.left.findDepth(), this.right.findDepth()) + 1;
};

TreeNode.prototype.delete = function(val){
  var rootNode = this;
  var parent;
  var current = this;
  while (true){
    if (!current){
      return rootNode;
    }
    if (val === current.val){
      break;
    }else if (val < current.val){
      parent = current;
      current = current.left;
    }else if (val > current.val){
      parent = current;
      current = current.right;
    }
  }
  // leaf
  if (current.left === null && current.right === null){
    if (!parent){
      rootNode = current.left || current.right;
    }else if (current.val < parent.val){
      parent.left = null;
    }else if (current.val > parent.val){
      parent.right = null;
    }

  // one child
  }else if (current.left === null || current.right === null){
    if (!parent){
      rootNode = current.left || current.right;
    }else if (current.val < parent.val){
      parent.left = current.left || current.right;
    }else if (current.val > parent.val){
      parent.right = current.left || current.right;
    }

  // two children
  }else{
    var minNode = current.right.findMinNode();
    current.val = minNode.val;
    current.right = current.right.delete(minNode.val);
  }
  return rootNode;
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
    output.push(node);
  }
  return output.map(function(node){
    return node.val;
  });
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
    output.push(node);
  }
  return output.map(function(node){
    return node.val;
  });
};

TreeNode.prototype.inOrder = function(){
  var output = [];
  var stack = [];
  var current = this;
  while (current || stack.length){
    if (current){
      stack.push(current);
      current = current.left;
    }else{
      var node = stack.pop();
      output.push(node);
      if (node.right){
        current = node.right;
      }
    }
  }
  return output.map(function(node){
    return node.val;
  });
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
