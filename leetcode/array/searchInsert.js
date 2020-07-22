function searchInsert(nums, target) {
  let len = nums.length

  while (len) {
    if (target > nums[len - 1]) {
      return len
    } else {
      len--
    }
  }
  return len
}

const nums = [1, 3, 5, 6]

console.info(searchInsert(nums, 2))