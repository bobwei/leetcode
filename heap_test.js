'use strict';

var HeapModule = require('./heap');
var Heap = HeapModule.Heap;
var heap = new Heap();
var data = [
  [1, 'Bob'],
  [2, 'Helen'],
  [3, 'Yun-Chu'],
  [4, 'Yawen']
];
data.forEach(function(obj){
  heap.insert(obj[0], obj[1]);
});
console.log(heap.data);

data.forEach(function(){
  var obj = heap.pop();
  console.log(obj);
});
