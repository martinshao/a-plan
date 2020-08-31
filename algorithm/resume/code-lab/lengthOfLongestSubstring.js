function lengthOfLongestSubstring(str) {
  const arr = [...str]
  let maxLen = 1;
  let result = arr.reduce((total, curr, i) => {
    if (i === 0) {
      return curr
    } else {
      if (total.indexOf(curr) < 0) {
        return total + curr
      } else if (maxLen < total.length) {
        maxLen = total.length
        return total.slice(total.indexOf(curr) + 1, total.length) + curr
      } else {
        return total.slice(total.indexOf(curr) + 1, total.length) + curr
      }
    }
  }, '')

  if (maxLen < result.length) {
    maxLen = result.length
  }

  return maxLen
}

console.info(lengthOfLongestSubstring('loddktdji'))