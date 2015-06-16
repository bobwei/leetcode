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
