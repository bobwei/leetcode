'use strict';

var swapPairs = function(head) {
  if (!head || !head.next){
    return head;
  }
  var next = head.next.next;
  var tmpNode = new ListNode();
  tmpNode.next = head.next;
  tmpNode.next.next = head;
  head.next = swapPairs(next);
  return tmpNode.next;
};

var sll = require('./sll');
var ListNode = sll.ListNode;

var data;
var listNode;
var result;

data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
listNode = new ListNode(data);
result = swapPairs(listNode);
console.log(result.traverse());
