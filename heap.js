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
  // convert to 1-based index
  var _index = index + 1;
  var _parentIndex = Math.floor(_index / 2);

  while (
    _index > 1 &&
    !this.compareFunc(
      this.data[_parentIndex - 1].key,
      this.data[_index - 1].key
    )
  ){
    this.swap(_index - 1, _parentIndex - 1);
    _index = Math.floor(_index / 2);
    _parentIndex = Math.floor(_index / 2);
  }
};

Heap.prototype.sinkDown = function(index){
  var _index = index + 1;
  var _leftIndex;
  var _rightIndex;
  var _toSwapIndex;

  do{
    _leftIndex = 2 * _index;
    _rightIndex = _leftIndex + 1;
    if (_leftIndex < this.data.length &&
        !this.compareFunc(
          this.data[_index - 1].key,
          this.data[_leftIndex - 1].key
        )){
      _toSwapIndex = _leftIndex;
    }
    if (_rightIndex < this.data.length &&
        !this.compareFunc(
          this.data[_toSwapIndex - 1].key,
          this.data[_rightIndex - 1].key
        )){
      _toSwapIndex = _rightIndex;
    }
    if (_toSwapIndex){
      this.swap(_index - 1, _toSwapIndex - 1);
    }
    _index = _toSwapIndex;
  }while(_index !== _toSwapIndex);
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
