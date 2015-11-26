/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sum = new Array(nums.length);
  this.sum[0] = nums[0];
  for (var i = 1; i < nums.length; i++) {
    this.sum[i] = nums[i] + this.sum[i - 1];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  var y = this.sum[j];
  var x = (i - 1 >= 0) ? this.sum[i - 1]: 0;
  return y - x;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */

var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(2, 5));
console.log(numArray.sumRange(0, 5));
