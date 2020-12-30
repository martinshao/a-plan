function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right;
  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

/**
 * 
 * @param {Array} arr
 * @param {Int} left
 * @param {Int} right
 */
function partition(arr, left, right) {
  var pivot = left,
    slow = pivot + 1;
  for (var fast = slow; fast <= right; fast++) {
    if (arr[fast] < arr[pivot]) {
      swap(arr, fast, slow);
      slow++;
    }
  }
  swap(arr, pivot, slow - 1);
  return slow - 1;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

let arr = [15, 44, 38, 5, 47, 3, 36, 26, 27, 2, 46, 4, 19, 50, 48];

let sortArr = quickSort(arr);
console.info(sortArr)