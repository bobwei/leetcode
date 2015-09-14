'use strict';

var sll = require('./sll');
var ListNode = sll.ListNode;

var reverseList = function(head) {
  if (!head){
    return null;
  }
  if (!head.next){
    return head;
  }
  var reversedList = reverseList(head.next);

  var current = reversedList;
  while (current.next){
    current = current.next;
  }
  current.next = head;
  head.next = null;

  return reversedList;
};

var data;
var theNode;

data = [1, 2, 3, 4, 5];
theNode = new ListNode(data);
console.log(reverseList(theNode).traverse());
