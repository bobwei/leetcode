var merge = function(nums1, m, nums2, n) {
  'use strict';
  while (m && n) {
    if (nums2[n - 1] >= nums1[m - 1]) {
      nums1[m + n - 1] = nums2[n - 1];
      n -= 1;
    }else if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m -= 1;
    }
  }
  while (n) {
    nums1[n - 1] = nums2[n - 1];
    n -= 1;
  }
};


var nums1Data;
var nums1;
var nums2Data;
var nums2;

nums1Data = [1, 3, 5, 7];
nums1 = nums1Data.concat(new Array(100));
nums2Data = [2, 4, 6, 8];
nums2 = nums2Data.concat(new Array(100));
merge(nums1, nums1Data.length, nums2, nums2Data.length);
console.log(nums1.filter((num) => { return num !== undefined; }));

nums1Data = [0];
nums1 = nums1Data.concat(new Array(4));
nums2Data = [1];
nums2 = nums2Data.concat(new Array(4));
merge(nums1, nums1Data.length, nums2, nums2Data.length);
console.log(nums1.filter((num) => { return num !== undefined; }));
