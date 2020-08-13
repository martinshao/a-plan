function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

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

  return arr
}

function partition(arr, left, right) {
  let pivot = left,
    index = pivot + 1;
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1
}

let arr = [4, 10, 9, 5, 0, 9, 3, 5, 3, 10];
let arrSorted = quickSort(arr);
console.info(arrSorted)