'use strict';

var sll = require('./sll');
var ListNode = sll.ListNode;

var partition = function(head, x) {
  var sListHead = new ListNode();
  var sListTail = sListHead;

  var lListHead = new ListNode();
  var lListTail = lListHead;

  var current = head;
  while (current){
    if (current.val < x){
      sListTail.next = current;
      sListTail = sListTail.next;
    }else{
      lListTail.next = current;
      lListTail = lListTail.next;
    }
    current = current.next;
    sListTail.next = null;
  }
  sListTail.next = lListHead.next;
  lListTail.next = null;
  return sListHead.next;
};

var data;
var listNode;

data = [1, 4, 3, 2, 5, 2];
listNode = new ListNode(data);
listNode = partition(listNode, 3);
console.log(listNode.traverse());
