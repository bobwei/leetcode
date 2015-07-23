'use strict';

var sll = require('./sll');
var ListNode = sll.ListNode;

var mergeList = function(head1, head2){
  // create an empty node
  var head = new ListNode();
  var tail = head;

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
  tail.next = head1 || head2;

  return head.next;
};

var getMiddleNode = function(head){
  var slowPointer = head;
  var fastPointer = head;
  while (slowPointer.next && (fastPointer.next && fastPointer.next.next)){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer;
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

var data;
var headNode;
data = [3, 5, 4, 2, 1, 9, 2];
headNode = new ListNode(data);
console.log(headNode.traverse());

// test merge list
console.log(
  mergeList(
    new ListNode([1, 3, 5]),
    new ListNode([2, 4, 6])
  ).traverse()
);

// test getMiddleNode
console.log(
  'middleNode =',
  getMiddleNode(
    new ListNode([1, 2, 3])
  ).val
);

console.log(
  'middleNode =',
  getMiddleNode(
    new ListNode([2, 3])
  ).val
);

// test sortList
console.log(
  sortList(
    new ListNode(data)
  ).traverse()
);
