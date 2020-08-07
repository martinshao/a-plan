/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;
  nums.sort(compare);
  const ans = [];
  const set = new Set()
  for (let first = 0; first < n; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let third = n - 1;
    let target = -nums[first]
    for (let second = first + 1; second < n; second++) {
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue;
      }
      while (second < third && nums[second] + nums[third] > target) {
        third--;
      }
      if (second === third) {
        break;
      }
      if (nums[second] + nums[third] === target) {
        if (!set.has(`${nums[first]}${nums[second]}${nums[third]}`)) {
          set.add(`${nums[first]}${nums[second]}${nums[third]}`)
          ans.push([nums[first], nums[second], nums[third]])
        }
      }
    }
  }
  return ans
};

const compare = (a, b) => {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

// const nums = [-1, 0, 1, 2, -1, -4]
const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]

const result = threeSum(nums)

console.info(result)