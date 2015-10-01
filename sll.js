'use strict';

var ListNode = function(val){
  if (val instanceof Array){
    this.val = val.shift();
    this.next = null;
    var that = this;
    val.forEach(function(obj){
      that.insert(obj);
    });
  }else{
    this.val = val;
    this.next = null;
  }
};

ListNode.prototype.insert = function(val){
  var current = this;
  while (current.next){
    current = current.next;
  }
  var node = new ListNode(val);
  current.next = node;
};

ListNode.prototype.traverse = function(){
  var output = [];
  var current = this;
  while (current){
    output.push(current);
    current = current.next;
  }
  return output.map(function(node){
    return node.val;
  });
};

module.exports.ListNode = ListNode;
