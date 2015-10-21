'use strict';

var reverseKGroup = function(head, k) {
  if (!head){
    return head;
  }
  var listHead = new ListNode();
  var listTail;
  var listPtr = head;
  var stack = [];
  var i = 0;
  while (listPtr) {
    stack.push(listPtr);
    listPtr = listPtr.next;
    if (i % k === k - 1) {
      // reverse list with length k
      var tmpList = new ListNode();
      tmpList.next = stack.pop();
      var tail = tmpList.next;
      while (stack.length) {
        var current = stack.pop();
        tail.next = current;
        tail = current;
      }
      if (!listHead.next) {
        listHead.next = tmpList.next;
      }
      if (!listTail) {
        listTail = tail;
        listTail.next = null;
      }else {
        listTail.next = tmpList.next;
        listTail = tail;
        listTail.next = null;
      }
    }
    i++;
  }
  if (stack.length) {
    if (listHead.next){
      listTail.next = stack.shift();
    }else {
      listHead.next = stack.shift();
    }
  }
  return listHead.next;
};

var sll = require('./sll');
var ListNode = sll.ListNode;

var data;
var listNode;
var result;

data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
listNode = new ListNode(data);
result = reverseKGroup(listNode, 4);
console.log(result.traverse());

data = [1];
listNode = new ListNode(data);
result = reverseKGroup(listNode, 2);
console.log(result.traverse());
