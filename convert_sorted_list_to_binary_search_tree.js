'use strict';

var sll = require('./sll');
var bst = require('./bst');
var ListNode = sll.ListNode;
var TreeNode = bst.TreeNode;


var getLength = function(head){
  if (!head){
    return 0;
  }
  return getLength(head.next) + 1;
};

var buildBST = function(head, start, end){
  var response = {
    root: null,
    max: null
  };
  if (start > end){
    return response;
  }

  var middle = Math.floor((start + end) / 2);
  var leftResponse = buildBST(head, start, middle - 1);
  var leftTreeNode = leftResponse.root;

  var rootListNode = (leftResponse.max) ? leftResponse.max.next : head ;
  var rootTreeNode = new TreeNode(rootListNode.val);

  var rightResponse = buildBST(rootListNode.next, middle + 1, end);
  var rightTreeNode = rightResponse.root;

  rootTreeNode.left = leftTreeNode;
  rootTreeNode.right = rightTreeNode;

  response.root = rootTreeNode;
  response.max = rightResponse.max || head;

  return response;
};

var sortedListToBST = function(head) {
  var n = getLength(head);
  if (!n){
    return null;
  }
  return buildBST(head, 0, n - 1).root;
};


var data;
var listNode;
var head;

data = [0, 1, 2, 3, 4, 5, 6];
listNode = new ListNode(data);
head = sortedListToBST(listNode);
console.log(head.inOrder());

data = [1];
listNode = new ListNode(data);
head = sortedListToBST(listNode);
console.log(head.inOrder());
