function merge(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  const merged = []
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    let len = merged.length - 1
    if (!merged.length || merged[len][1] < interval[0]) {
      merged.push(interval)
    } else {
      merged[len][1] = Math.max(merged[len][1], interval[1])
    }
  }
  return merged
}

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]

console.info(merge(intervals))