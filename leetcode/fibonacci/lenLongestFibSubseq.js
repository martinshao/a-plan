// https://leetcode-cn.com/articles/length-of-longest-fibonacci-subsequence/
function lenLongestFibSubseq(arr) {
  const len = arr.length
  const set = new Set()
  arr.forEach(el => {
    set.add(el)
  });

  let ans = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let x = arr[j],
        y = arr[i] + arr[j],
        length = 2
      while (set.has(y)) {
        let tmp = y;
        y += x;
        x = tmp;
        ans = Math.max(ans, ++length)
      }
    }
  }
  return ans >= 3 ? ans : 0
}




const arr = [1, 2, 3, 4, 5, 6, 7, 8]

console.info(lenLongestFibSubseq(arr))