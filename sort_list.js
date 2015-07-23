'use strict';

var mergeList = function(head1, head2){
  if (!head1 || !head2){
    return head1 || head2;
  }
  var head, tail;
  if (head1.val < head2.val){
    head = head1;
    head1 = head1.next;
  }else{
    head = head2;
    head2 = head2.next;
  }
  tail = head;
  tail.next = null;
  while (head1 && head2){
    if (head1.val < head2.val){
      tail.next = head1;
      head1 = head1.next;
    }else{
      tail.next = head2;
      head2 = head2.next;
    }
    tail = tail.next;
  }
  if (head1){
    tail.next = head1;
  }else{
    tail.next = head2;
  }
  return head;
};

var getMiddleNode = function(head){
  var current = head;
  var length = 0;
  while (current){
    length += 1;
    current = current.next;
  }

  current = head;
  var n = Math.floor(length / 2);
  var j = 0;
  while (j < n && n > 2){
    j += 1;
    current = current.next;
  }
  return current;
};

var sortList = function(head){
  if (!head || !head.next){
    return head;
  }
  var middleNode = getMiddleNode(head);
  var right = middleNode.next;
  var left = head;
  middleNode.next = null;

  return mergeList(
    sortList(left),
    sortList(right)
  );
};

var sll = require('./sll');
var ListNode = sll.ListNode;

var data;
var headNode;
data = [3, 5, 4, 2, 1, 9, 2];
headNode = new ListNode(data);
console.log(headNode.traverse());
console.log(
  sortList(headNode).traverse()
);
