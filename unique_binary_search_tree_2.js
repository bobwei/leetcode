/* jshint loopfunc:true */

'use strict';

var bst = require('./bst');
var TreeNode = bst.TreeNode;

var generate = function(keys){
  var output = [];
  if (keys.length <= 0){
    output.push(null);
    return output;
  }
  if (keys.length === 1){
    output.push(new TreeNode(keys[0]));
    return output;
  }
  for ( var i = 0 ; i < keys.length ; i++ ){
    var leftNodes = generate(keys.slice(0, i));
    var rightNodes = generate(keys.slice(i + 1, keys.length));
    leftNodes.forEach(function(leftNode){
      rightNodes.forEach(function(rightNode){
        var rootNode = new TreeNode(keys[i]);
        rootNode.left = leftNode;
        rootNode.right = rightNode;
        output.push(rootNode);
      });
    });
  }

  return output;
};

var generateTrees = function(n){
  var keys = [];
  for ( var i = 1 ; i < n + 1 ; i++){
    keys.push(i);
  }
  return generate(keys);
};

var nodes = generateTrees(4);
nodes.forEach(function(node){
  node.bfs();
  console.log('--');
});
console.log();
