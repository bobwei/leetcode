/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

'use strict';

var BSTIterator = function(root) {
  this.stack = [];
  this.current = root;
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.current || this.stack.length;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  if (this.current){
    while (this.current){
      this.stack.push(this.current);
      this.current = this.current.left;
    }
  }
  var next = this.stack.pop();
  if (next.right){
    this.current = next.right;
  }
  return next.val;
};

var bst = require('./bst');
var TreeNode = bst.TreeNode;

var data;
var rootNode;

data = [20, 8, 22, 4, 12];
rootNode = new TreeNode(data.shift());
data.forEach(function(obj){
  rootNode.insert(obj);
});

var iterator = new BSTIterator(rootNode);
var output = [];
while (iterator.hasNext()){
  output.push(iterator.next());
}
console.log(output);
