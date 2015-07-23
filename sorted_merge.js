'use strict';

var sll = require('./sll');
var ListNode = sll.ListNode;

var sortedMerge = function(head1, head2){
  var head, tail;
  // initialize head
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
    tail.next = null;
  }
  if (head1){
    tail.next = head1;
  }else if (head2){
    tail.next = head2;
  }
  return head;
};

var headNode1, headNode2, mergedHead;

headNode1 = new ListNode([1, 3, 5]);
headNode2 = new ListNode([2, 4, 6, 7, 8]);
mergedHead = sortedMerge(headNode1, headNode2);
console.log(mergedHead.traverse());

headNode1 = new ListNode([1, 2, 3, 19]);
headNode2 = new ListNode([4, 5, 6]);
mergedHead = sortedMerge(headNode1, headNode2);
console.log(mergedHead.traverse());
