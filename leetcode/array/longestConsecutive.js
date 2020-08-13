/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const num_set = new Set()
  nums.forEach(num => {
    num_set.add(num)
  });

  let longestStreak = 0;
  for (const num of num_set) {
    if (!num_set.has(num - 1)) {
      let currentNum = num,
        currentStreak = 1;
      while (num_set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak
};

const nums = [100, 4, 200, 1, 3, 2]

console.info(longestConsecutive(nums))