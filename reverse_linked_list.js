'use strict';

var LinkedNode = function(val){
  this.val = val;
  this.next = null;
};

LinkedNode.prototype.insert = function(val){
  var current = this;
  while (current.next){
    current = current.next;
  }
  current.next = new LinkedNode(val);
};

LinkedNode.prototype.print = function(){
  var output = [];
  var current = this;
  while (current){
    output.push(current.val);
    current = current.next;
  }
  console.log(output.join('->'));
};

var reverseLinkedList = function(node){
  // if it's the last one, return it
  if (node.next === null){
    return node;
  }

  // reverse the rest
  var reversedNode = reverseLinkedList(node.next);

  // link the last element of the reversed node to first node
  var current = reversedNode;
  while (current.next){
    current = current.next;
  }
  current.next = node;

  // delete the link of first node
  node.next = null;
  return reversedNode;
};

var node = new LinkedNode(0);
for ( var i = 1 ; i < 10 ; i++ ){
  node.insert(i);
}
node.print();

var reversedNode = reverseLinkedList(node);
reversedNode.print();
