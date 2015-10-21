'use strict';

var insertionSortList = function(head) {
  var tmpList = new ListNode();
  var tmpListPtr;
  var current = head;
  while (current) {
    var next = current.next;
    tmpListPtr = tmpList;
    while (tmpListPtr.next && current.val > tmpListPtr.next.val) {
      tmpListPtr = tmpListPtr.next;
    }
    current.next = tmpListPtr.next;
    tmpListPtr.next = current;
    current = next;
  }
  return tmpList.next;
};

var sll = require('./sll');
var ListNode = sll.ListNode;

var data;
var listNode;

data = [7, 3, 1, 2, 4, 5, 6];
listNode = new ListNode(data);
console.log(insertionSortList(listNode).traverse());
