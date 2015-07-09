'use strict';

var bt = require('./bt');
var TreeNode = bt.TreeNode;

var isBalanced = function(root, isNotRoot){
  var response = {
    height: 0,
    isBalanced: false
  };
  if (root === null || root.val === null){
    response.isBalanced = true;
  }else{
    var leftResponse = isBalanced(root.left, true);
    var rightResponse = isBalanced(root.right, true);

    response.height = Math.max(leftResponse.height, rightResponse.height) + 1;

    if (leftResponse.isBalanced &&
      rightResponse.isBalanced &&
      Math.abs(leftResponse.height - rightResponse.height) <= 1){
      response.isBalanced = true;
    }
  }
  return (!isNotRoot) ? response.isBalanced : response ;
};

var data;
data = [1, null, 2, 3, 4, 5];
var rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
// console.log('bfs');
// rootNode.bfs();
// console.log('dfs');
// rootNode.dfs();
// console.log('isBalanced');
console.log(isBalanced(rootNode));
