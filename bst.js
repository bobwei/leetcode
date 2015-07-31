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

TreeNode.prototype.findMin = function(){
  var parent;
  var current = this;
  while (true){
    if (current.left){
      parent = current;
      current = current.left;
    }else{
      break;
    }
  }
  return {
    current: current,
    parent: parent
  };
};

TreeNode.prototype.findDepth = function(){
  if (!this.left && !this.right){
    return 0;
  }

  return Math.max(this.left.findDepth(), this.right.findDepth()) + 1;
};

TreeNode.prototype.delete = function(val){
  var parent;
  var current = this;
  var isFound = false;
  while (true){
    if (val < current.val){
      parent = current;
      current = current.left;
    }else if (val > current.val){
      parent = current;
      current = current.right;
    }else{
      isFound = true;
      break;
    }
  }
  if (isFound){
    // leaf
    if (current.left === null && current.right === null){
      if (current.val < parent.val){
        parent.left = null;
      }else if (current.val > parent.val){
        parent.right = null;
      }
    // with only one child
    }else if (current.left === null || current.right === null){
      if (current.val < parent.val){
        if (current.left){
          parent.left = current.left;
        }else if (current.right){
          parent.left = current.right;
        }
      }else if (current.val > parent.val){
        if (current.left){
          parent.right = current.left;
        }else if (current.right){
          parent.right = current.right;
        }
      }
    // with two children
    }else{
      var result = current.right.findMin();
      var minCurrent = result.current;
      var minParent = result.parent;
      current.val = minCurrent.val;
      if (minCurrent.val < minParent.val){
        minParent.left = null;
      }else if (minCurrent.val > minParent.val){
        minParent.right = null;
      }
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
