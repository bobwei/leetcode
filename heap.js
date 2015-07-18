'use strict';

var Heap = function(compareFunc){
  this.data = [];
  // default to max heap
  this.compareFunc = compareFunc || function(a, b){
    return a > b;
  };
};

Heap.prototype.swap = function(index1, index2){
  var tmp = this.data[index1];
  this.data[index1] = this.data[index2];
  this.data[index2] = tmp;
};

Heap.prototype.insert = function(key, item){
  this.data.push({
    key: key,
    item: item
  });
  var index = this.data.length - 1;
  this.bubbleUp(index);
};

Heap.prototype.bubbleUp = function(index){
  if (index <= 0 ){
    return;
  }
  var parent = (index % 2 === 1) ? (index - 1) / 2 : (index - 2) / 2 ;
  if (!this.compareFunc(this.data[parent].key, this.data[index].key)){
    this.swap(parent, index);
    this.bubbleUp(parent);
  }
};

Heap.prototype.sinkDown = function(index){
  var toSwapIndex = index;
  var left = 2 * index + 1;
  var right = left + 1;
  if (left < this.data.length &&
      !this.compareFunc(this.data[index].key, this.data[left].key)){
    toSwapIndex = left;
  }
  if (right < this.data.length &&
      !this.compareFunc(this.data[toSwapIndex].key, this.data[right].key)){
    toSwapIndex = right;
  }
  if (toSwapIndex !== index){
    this.swap(index, toSwapIndex);
    this.sinkDown(toSwapIndex);
  }
};

Heap.prototype.pop = function(){
  var output = this.data[0];
  this.swap(0, this.data.length - 1);
  this.data.pop();
  this.sinkDown(0);
  return Object.keys(output).map(function(key){
    return output[key];
  });
};

module.exports.Heap = Heap;
