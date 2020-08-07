/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort(compare)[k - 1]
};

const compare = (a, b) => {
  if (a < b) return 1
  if (a > b) return -1
  return 0
}

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4;

console.info(findKthLargest(nums, k))