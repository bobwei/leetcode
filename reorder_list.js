'use strict';

var reorderList = function(head) {
  var tmpList = new ListNode();
  var tail = head;
  var stack = [];
  while (tail) {
    stack.push(tail);
    tail = tail.next;
  }
  tmpList.next = stack.shift();
  tail = tmpList.next;
  var i = 0;
  while (stack.length) {
    var current;
    if (i % 2 === 0) {
      current = stack.pop();
    }else if (i % 2 === 1){
      current = stack.shift();
    }
    tail.next = current;
    tail = tail.next;
    tail.next = null;
    i++;
  }
};

var sll = require('./sll');
var ListNode = sll.ListNode;

var data;
var listNode;

data = [1, 2, 3, 4, 5];
listNode = new ListNode(data);
reorderList(listNode);
console.log(listNode.traverse());
