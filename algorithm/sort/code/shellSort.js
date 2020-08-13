// 修改于 2019-03-06
// function shellSort(arr) {
//   let len = arr.length;
//   for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
//     // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
//     for (var i = gap; i < len; i++) {
//       var j = i;
//       var current = arr[i];
//       while (j - gap >= 0 && current < arr[j - gap]) {
//         arr[j] = arr[j - gap];
//         j = j - gap;
//       }
//       arr[j] = current;
//     }
//   }
//   return arr;
// }

// function shellSort(arr) {
//   var len = arr.length,
//     temp,
//     gap = 1;
//   while (gap < len / 3) { // 动态定义间隔序列
//     gap = gap * 3 + 1;
//   }
//   for (gap; gap > 0; gap = Math.floor(gap / 3)) {
//     for (var i = gap; i < len; i++) {
//       temp = arr[i];
//       for (var j = i - gap; j > 0 && arr[j] > temp; j -= gap) {
//         arr[j + gap] = arr[j];
//       }
//       arr[j + gap] = temp;
//     }
//   }
//   return arr;
// }

function shellSort(arr) {
  const len = arr.length;
  let h = 1;
  while (h < len / 3) h = 3 * h + 1;
  while (h >= 1) {
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && less(arr[j], arr[j - h]); j -= h) {
        swap(arr, j, j - h)
      }
    }
    h = Math.floor(h / 3);
  }
  return arr
}

const less = (a, b) => a < b
const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

let arr = [4, 10, 9, 5, 0, 9, 3, 5, 3, 10];
let arrSorted = shellSort(arr);
console.info(arrSorted)