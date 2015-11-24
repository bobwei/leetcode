var reverseList = function(head) {
  var lastNode = null;
  var current = head;
  var next;
  while (current) {
    next = current.next;
    current.next = lastNode;
    lastNode = current;
    current = next;
  }
  return lastNode;
};

var compareLists = function(head1, head2) {
  while (head1 && head2) {
    if (head1.val === head2.val) {
      head1 = head1.next;
      head2 = head2.next;
    } else {
      return false;
    }
  }
  if (head1 === null && head2 === null) {
    return true;
  }
  return false;
};

var isPalindrome = function(head) {
  if (!head || !head.next) {
    return true;
  }
  var slowNode = head;
  var fastNode = head;
  while (!(fastNode === null || fastNode.next === null)) {
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;
  }
  var tmp = head;
  while (tmp.next !=  slowNode) {
    tmp = tmp.next;
  }
  tmp.next = null;
  var reversedHead = (fastNode) ? slowNode.next: slowNode;
  reversedHead = reverseList(reversedHead);
  return compareLists(head, reversedHead);
};

var sll = require('./sll');
var ListNode = sll.ListNode;

var listNode;

listNode = new ListNode('abcdcba'.split(''));
console.log(isPalindrome(listNode));

listNode = new ListNode('a'.split(''));
console.log(isPalindrome(listNode));

listNode = new ListNode('ab'.split(''));
console.log(isPalindrome(listNode));

listNode = new ListNode('ababbaba'.split(''));
console.log(isPalindrome(listNode));
