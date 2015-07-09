'use strict';

var isValidBST = function(root, isNonRoot) {
  var response = {
    isValid: true,
    min: Infinity,
    max: -Infinity
  };
  if (!root){

  }else if (root && !root.left && !root.right){
    response.isValid = true;
    response.min = Math.min(response.min, root.val);
    response.max = Math.max(response.max, root.val);
  }else{
    var leftResponse = isValidBST(root.left, true);
    var rightResponse = isValidBST(root.right, true);
    response.min = Math.min(response.min, leftResponse.min, rightResponse.min, root.val);
    response.max = Math.max(response.max, leftResponse.max, rightResponse.max, root.val);
    response.isValid = leftResponse.isValid &&
                        rightResponse.isValid &&
                        (!root.left || root.left && root.val > leftResponse.max) &&
                        (!root.right || root.right && root.val < rightResponse.min);
  }
  return (isNonRoot) ? response : response.isValid ;
};


var bt = require('./bt');
var TreeNode = bt.TreeNode;

var data;
var rootNode;

data = [20, 8, 22, 4, 12, 10, 14];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
console.log(isValidBST(rootNode));

data = [10, 5, 15, null, null, 6, 20];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
rootNode.clearNull();
console.log(isValidBST(rootNode));

data = [0, null, -1];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
rootNode.clearNull();
console.log(isValidBST(rootNode));

data = [0, null, 1];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
rootNode.clearNull();
console.log(isValidBST(rootNode));

data = [5, 14, null, 1];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
rootNode.clearNull();
console.log(isValidBST(rootNode));
