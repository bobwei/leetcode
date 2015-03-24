// [1, 2, 3], 0, 2
var reverse = function(nums, i, j){
    if (j < nums.length){
        var tmp;
        for (; i < j ; i++, j--){
            tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
        }
    }
};

var rotate = function(nums, k){
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

// var nums = [1, 2, 3, 4, 5, 6, 7];
// var k = 3;
var nums = [1, 2, 3];
var k = 4;
rotate(nums, k);
console.log(nums);
