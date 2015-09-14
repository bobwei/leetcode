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

var reverseBetween = function(head, m, n) {
  var dNode = new ListNode(0);
  dNode.next = head;

  var cHead, cTail;
  var current = dNode;
  for ( var i = 0 ; i < m - 1 ; i++ ){
    current = current.next;
  }
  cHead = current;

  current = dNode;
  for ( var i = 0 ; i < n ; i++ ){
    current = current.next;
  }
  cTail = current.next;
  current.next = null;

  cHead.next = reverseList(cHead.next);
  current = cHead;
  while (current.next){
    current = current.next;
  }
  current.next = cTail;

  return dNode.next;
};

var data;
var theNode;
var m, n;

data = [1, 2, 3, 4, 5];
m = 3, n = 3;
theNode = new ListNode(data);
console.log(reverseBetween(theNode, m, n).traverse());
