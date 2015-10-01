'use strict';

var detectCycle = function(head){
  if (!head || !head.next){
    return null;
  }
  var p1 = head.next;
  var p2 = head.next.next;
  while (p1 && p2 && p2.next){
    if (p1 === p2){
      break;
    }
    p1 = p1.next;
    p2 = p2.next.next;
  }
  var theCycle = head;
  while (theCycle && p1){
    if (theCycle === p1){
      return theCycle;
    }
    theCycle = theCycle.next;
    p1 = p1.next;
  }
  return null;
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
tail.next = listNode.next.next.next.next;
console.log(detectCycle(listNode).val);


data = [0, 1, 2, 3, 4, 5, 6];
listNode = new ListNode(data);
console.log(detectCycle(listNode));


data = [-1, -7, 7, -4, 19, 6, -9, -5, -2, -5];
listNode = new ListNode(data);
tail = listNode;
while (tail.next){
  tail = tail.next;
}
tail.next = listNode.next.next.next.next.next.next.next.next.next;
console.log(detectCycle(listNode).val);
