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
 * 
 * @variable {Int} pivot 设定的基准值，这里选择最左值
 * @variable {Int} fast 快指针，从左往走扫描，遇到大于基准值，慢指针与快指针值交换，并且慢指针进一步。
 * @variable {Int} slow 慢指针，在快指针走完后，慢指针前一位与基准值交换。
 */
function partition(arr, left, right) {     // 分区操作
  var pivot = left,                      // 设定基准值（pivot）
      slow = pivot + 1;
  for (var fast = slow; fast <= right; i++) {
    if (arr[fast] < arr[pivot]) {
      swap(arr, fast, slow);
      slow++;
    }
  }
  swap(arr, pivot, slow - 1);
  return slow - 1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}