/****************************** ******************************/
function mergeSort(arr) {
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
}

/****************************** ******************************/

function mergeSort(arr) {
  const aux = []

  return sort(arr, 0, arr.length - 1)

  function sort(arr, lo, hi) {
    if (hi <= lo) return;
    let mid = lo + Math.floor((hi - lo) / 2)
    sort(arr, lo, mid);
    sort(arr, mid + 1, hi);
    merge(arr, lo, mid, hi);
    return arr
  }

  function merge(arr, lo, mid, hi) {
    let i = lo,
      j = mid + 1;
    for (let k = lo; k <= hi; k++) {
      aux[k] = arr[k]
    }
    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        arr[k] = aux[j++]
      } else if (j > hi) {
        arr[k] = aux[i++]
      } else if (less(aux[j], aux[i])) {
        arr[k] = aux[j++]
      } else {
        arr[k] = aux[i++]
      }
    }
  }
}

const less = (a, b) => a < b
const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

let arr = [4, 10, 9, 5, 0, 9, 3, 5, 3, 10];
let arrSorted = mergeSort(arr);
console.info(arrSorted)