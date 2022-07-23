function bubbleSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] =[arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}


const arr = [4, 10, 9, 5, 0, 9, 3, 5, 3, 10];

console.info(bubbleSort(arr))