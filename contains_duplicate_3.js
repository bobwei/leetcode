'use strict';

var TreeNode = function(val){
  this.left = null;
  this.right = null;
  if (val instanceof Array){
    this.val = val.shift();
    var that = this;
    val.forEach(function(v){
      that.insert(v);
    });
  }else{
    this.val = val;
  }
};

TreeNode.prototype.insert = function(val){
  var current = this;
  while (true){
    if (val === current.val){
      return;
    }else if (val < current.val){
      if (current.left){
        current = current.left;
      }else{
        current.left = new TreeNode(val);
        return;
      }
    }else if (val > current.val){
      if (current.right){
        current = current.right;
      }else{
        current.right = new TreeNode(val);
        return;
      }
    }
  }
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
  if (current.left === null && current.right === null){
    if (!parent){
      rootNode = current.left || current.right;
    }else if (current.val < parent.val){
      parent.left = null;
    }else if (current.val > parent.val){
      parent.right = null;
    }
  }else if (current.left === null || current.right === null){
    if (!parent){
      rootNode = current.left || current.right;
    }else if (current.val < parent.val){
      parent.left = current.left || current.right;
    }else if (current.val > parent.val){
      parent.right = current.left || current.right;
    }
  }else{
    var minNode = current.right.findMinNode();
    current.val = minNode.val;
    current.right = current.right.delete(minNode.val);
  }
  return rootNode;
};

TreeNode.prototype.findMinNode = function(){
  var current = this;
  while (current.left){
    current = current.left;
  }
  return current;
};

TreeNode.prototype.floor = function(n){
  var current = this;
  var output = current.val;
  var diff = Infinity;
  while (current){
    var currentDiff = n - current.val;
    if (currentDiff > 0 && currentDiff < diff){
      diff = currentDiff;
      output = current.val;
    }
    if (n > current.val){
      current = current.right;
    }else if (n < current.val){
      current = current.left;
    }else{
      return current.val;
    }
  }
  return output;
};

TreeNode.prototype.ceil = function(n){
  var current = this;
  var output = current.val;
  var diff = Infinity;
  while (current){
    var currentDiff = current.val - n;
    if (currentDiff > 0 && currentDiff < diff){
      diff = currentDiff;
      output = current.val;
    }
    if (n > current.val){
      current = current.right;
    }else if (n < current.val){
      current = current.left;
    }else{
      return current.val;
    }
  }
  return output;
};

var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (k <= 0 && t >= 0){
    return false;
  }
  var treeSet = new TreeNode(nums[0]);
  for ( var i = 1 ; i < nums.length ; i++ ){
    if (i > k){
      treeSet = treeSet.delete(nums[i - k - 1]);
    }
    var floor = treeSet.floor(nums[i]);
    var ceil = treeSet.ceil(nums[i]);
    if (Math.abs(nums[i] - floor) <= t || Math.abs(nums[i] - ceil) <= t){
      return true;
    }
    treeSet.insert(nums[i]);
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate([5, 9, 13, 1117, 1, 18, 119, 21], 2, 3));
console.log(containsNearbyAlmostDuplicate([1, 2], 0, 1));
console.log(containsNearbyAlmostDuplicate([1, 1], 1, 0));
console.log(containsNearbyAlmostDuplicate([1, 3, 1], 1, 1));
