function pivotIndex(nums = []) {
  let partitionSum = 0
  const len = nums.length
  const sum = nums.reduce(
    (total, curr) => total + curr, 0
  )
  for (let i = 0; i < len; i++) {
    if (nums[i] + partitionSum * 2 === sum) {
      return i
    }
    partitionSum += nums[i]
  }
  return -1
}

const nums = []

console.info(pivotIndex(nums))