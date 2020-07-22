
function buddle_sort(arr) {
  let len = arr.length - 1
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - j; i++) { // 这个长度缩短的原因是：最大的数会慢慢沉到底部，再次排序的时候不用包括
      if (arr[i] > arr[i + 1]) { // 前一个数大于后一个数，颠倒位置
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }
  return arr
}

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const arr = [4, 10, 9, 5, 0, 9, 3, 5, 3, 10];
const sortArr = buddle_sort(arr)
console.info(sortArr)