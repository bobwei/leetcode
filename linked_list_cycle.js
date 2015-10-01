'use strict';

var hasCycle = function(head) {
  if (!head || !head.next){
    return false;
  }
  var p1 = head.next;
  var p2 = head.next.next;
  while (p1.next && p2.next && p2.next.next){
    if (p1.val === p2.val){
      return true;
    }
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return false;
};

var sll = require('./sll');
var ListNode = sll.ListNode;

var data;
var listNode;
var tail;

data = [0, 1, 2, 3, 4, 5, 6];
listNode = new ListNode(data);
tail = listNode;
while (tail.next){
  tail = tail.next;
}
tail.next = listNode.next.next;

console.log(hasCycle(listNode));

data = [0, 1, 2, 3, 4, 5, 6];
listNode = new ListNode(data);
console.log(hasCycle(listNode));
