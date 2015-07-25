'use strict';

var deleteNode = function(node) {
  node.val = node.next.val;
  if (!node.next.next){
    node.next = null;
    return;
  }
  deleteNode(node.next);
};


var sll = require('./sll');
var ListNode = sll.ListNode;

var data;
var listNode;

data = [1, 2, 3, 4, 5, 6, 7];
listNode = new ListNode(data);
console.log(listNode.traverse());
deleteNode(listNode.next.next);
console.log(listNode.traverse());

data = [1, 2];
listNode = new ListNode(data);
console.log(listNode.traverse());
deleteNode(listNode);
console.log(listNode.traverse());
