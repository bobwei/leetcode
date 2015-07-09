/*
Given two values k1 and k2 (where k1 < k2) and a root pointer to a Binary Search Tree.
Print all the keys of tree in range k1 to k2. i.e. print all x such that k1<=x<=k2 and x is a key of given BST.
Print all the keys in increasing order.

http://www.geeksforgeeks.org/print-bst-keys-in-the-given-range/

 */

'use strict';

var bst = require('./bst');
var TreeNode = bst.TreeNode;

var searchRange = function(rootNode, k1, k2){
  if (!rootNode){
    return [];
  }
  var keys = [];
  var rightKeys = [];
  var leftKeys = [];
  if (rootNode.val < k2){
    rightKeys = searchRange(rootNode.right, k1, k2);
  }
  if (rootNode.val > k1){
    leftKeys = searchRange(rootNode.left, k1, k2);
  }
  keys = keys.concat(leftKeys, rightKeys);
  if (rootNode.val <= k2 && rootNode.val >= k1){
    keys.push(rootNode.val);
  }

  return keys.sort(function(a, b){
    return a - b;
  });
};

var data = [20, 8, 22, 4, 12];
var rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});
var k1 = 10;
var k2 = 22;
console.log(searchRange(rootNode, k1, k2));
