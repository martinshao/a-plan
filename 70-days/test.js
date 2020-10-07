function missingNumber(nums) {
  const set = new Set(nums)
  for (let i = 0; i < nums.length + 1; i++) {
    if (!set.has(i)) {
      return i
    }
  }
};

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]

console.info(missingNumber(nums))