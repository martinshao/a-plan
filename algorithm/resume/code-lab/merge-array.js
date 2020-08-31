function mergeArray(arr) {

  if (arr.length <= 1) {
    return arr[0]
  }

  let mid = Math.floor(arr.length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid, arr.length)
  return merge(mergeArray(left), mergeArray(right))

  function merge(left, right) {
    const result = []

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }

    while (left.length) {
      result.push(left.shift())
    }

    while (right.length) {
      result.push(right.shift())
    }

    return result
  }
}

const arr = [
  [1, 2, 4],
  [2, 3, 7],
  [3, 5, 7],
  [4, 5, 8]
]

console.info(mergeArray(arr))