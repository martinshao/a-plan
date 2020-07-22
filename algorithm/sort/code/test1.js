function quickSort(arr = [], left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left !== 'number' ? 0 : left,
    right = typeof right !== 'number' ? len - 1 : right

  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  let pivot = left,
    index = pivot + 1
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]]
      index++
    }
  }
  [arr[index - 1], arr[pivot]] = [arr[pivot], arr[index - 1]]
  return index - 1
}


const arr = [15, 44, 38, 5, 47, 3, 36, 26, 27, 2, 46, 4, 19, 50, 48];
const sortArr = quickSort(arr)
console.info(sortArr)