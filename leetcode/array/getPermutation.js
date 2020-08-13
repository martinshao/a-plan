/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const factorials = []
  const nums = [1]

  factorials[0] = 1
  for (let i = 1; i < n; i++) {
    factorials[i] = factorials[i - 1] * i;
    nums.push(i + 1)
  }

  k--;

  let result = ''
  for (let i = n - 1; i > -1; i--) {
    let idx = Math.floor(k / factorials[i])
    k -= idx * factorials[i]
    result = result + nums[idx]
    nums.splice(idx, 1)
  }
  return result
};

console.info(getPermutation(3, 3))

console.info(getPermutation(4, 9))