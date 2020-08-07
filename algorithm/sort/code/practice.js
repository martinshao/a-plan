function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function selectionSort(arr) {
  const len = arr.length
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    swap(arr, minIndex, i)
  }
  return arr
}

let arr = [4, 10, 9, 5, 0, 9, 3, 5, 3, 10];
let arrSorted = selectionSort(arr);
console.info(arrSorted)