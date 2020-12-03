function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function shellSort(arr) {
  var len = Math.floor(arr.length / 2);
  while (len > 0) {
    for (var i = len; i < arr.length; i++) {
      var temp = arr[i];
      for (var j = i - len; j >= 0 && temp < arr[j]; j = j - len) {
        arr[j + len] = arr[j];
      }
      arr[j + len] = temp;
    }
    len = Math.floor(len / 2);
  }
  return arr;
}

let arr = [4, 10, 9, 5, 0, 9, 3, 5, 3, 10];
let arrSorted = shellSort(arr);
console.info(arrSorted);
