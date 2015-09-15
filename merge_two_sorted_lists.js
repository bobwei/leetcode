'use strict';

var sll = require('./sll');
var ListNode = sll.ListNode;

var mergeTwoLists = function(l1, l2) {
  var head = new ListNode(0);
  var current = head;
  while (l1 && l2){
    if (l1.val <= l2.val){
      current.next = l1;
      l1 = l1.next;
    }else{
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l1){
    current.next = l1;
  }else if (l2){
    current.next = l2;
  }
  return head.next;
};

var data;
var lists;

data = [
  [1, 3, 5, 7, 9, 11, 13, 15],
  [2, 4, 6, 8, 10, 100]
];
lists = [
  new ListNode(data[0]),
  new ListNode(data[1])
];
console.log(
  mergeTwoLists(lists[0], lists[1]).traverse()
);
