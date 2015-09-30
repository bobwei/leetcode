'use strict';

var addTwoNumbers = function(l1, l2) {
  var head = new ListNode(0);
  var current = head;
  var carry = 0;
  var sum;
  var newNode;
  while (l1 && l2){
    sum = l1.val + l2.val + carry;
    newNode = new ListNode(sum % 10);
    current.next = newNode;
    current = current.next;
    carry = Math.floor(sum / 10);
    l1 = l1.next;
    l2 = l2.next;
  }
  var remaining = l1 || l2;
  while (remaining){
    sum = remaining.val + carry
    newNode = new ListNode(sum % 10);
    current.next = newNode;
    current = current.next;
    carry = Math.floor(sum / 10);
    remaining = remaining.next;
  }
  if (carry){
    newNode = new ListNode(carry);
    current.next = newNode;
  }
  return head.next;
};

var sll = require('./sll');
var ListNode = sll.ListNode;

var data;
var sumNode;

data = [
  [2, 4, 3],
  [5, 6, 4]
];
sumNode = addTwoNumbers(
  new ListNode(data[0]),
  new ListNode(data[1])
);
console.log(sumNode.traverse());

data = [
  [2, 4, 5],
  [5, 6, 4]
];
sumNode = addTwoNumbers(
  new ListNode(data[0]),
  new ListNode(data[1])
);
console.log(sumNode.traverse());

data = [
  [2, 4, 5, 1, 2, 3],
  [5, 6, 4]
];
sumNode = addTwoNumbers(
  new ListNode(data[0]),
  new ListNode(data[1])
);
console.log(sumNode.traverse());
