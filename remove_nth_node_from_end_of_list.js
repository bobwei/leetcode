'use strict';

var removeNthFromEnd = function(head, n){
  var stack = [];
  var current = head;
  while (current){
    stack.push(current);
    current = current.next;
  }
  for ( var i = 0 ; i < n ; i++ ){
    current = stack.pop();
  }
  if (current === head){
    head = head.next;
  }else{
    var tmp = stack.pop();
    tmp.next = current.next;
  }
  return head;
};

var sll = require('./sll');
var ListNode = sll.ListNode;

var data;
var listNode;
var result;

data = [1, 2, 3, 4, 5];
listNode = new ListNode(data);
result = removeNthFromEnd(listNode, 2);
if (result){
  console.log(result.traverse());
}else{
  console.log(result);
}

data = [1];
listNode = new ListNode(data);
result = removeNthFromEnd(listNode, 1);
if (result){
  console.log(result.traverse());
}else{
  console.log(result);
}

data = [1, 2];
listNode = new ListNode(data);
result = removeNthFromEnd(listNode, 1);
if (result){
  console.log(result.traverse());
}else{
  console.log(result);
}

data = [1, 2];
listNode = new ListNode(data);
result = removeNthFromEnd(listNode, 2);
if (result){
  console.log(result.traverse());
}else{
  console.log(result);
}
