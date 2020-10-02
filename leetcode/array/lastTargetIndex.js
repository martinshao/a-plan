// const arr = [1, 2, 3, 4, 5, 5, 5, 5, 8, 9]

// const arr = [5, 5, 5, 5, 5, 5, 6]

// const arr = [1, 2, 2, 3, 3]

const arr = [1, 2, 3, 3, 3, 4, 5]

const target = 3

function lastTargetIndex(arr, target) {
  const len = arr.length
  let left = 0,
    right = len - 1;

  while (true) {
    if (arr[left] > target || arr[right] < target) return -1
    
    let middle = Math.floor((right - left) / 2 + left)
    if (arr[middle] === target) {
      left = middle
    } else if (arr[middle] > target) {
      right = middle
    } else {
      right = middle
    }

    if (left + 1 === right && arr[right] === target) {
      return right
    }

    if (left + 1 === right && arr[left] === target) {
      return left
    }
  }
}

console.info(lastTargetIndex(arr, target))