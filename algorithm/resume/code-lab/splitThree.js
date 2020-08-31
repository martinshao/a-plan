// 任意数分三组，每组和尽量相等（也就是最大值与最小值差值最小）
function equal(arr) {

  let array = arr.reduce(
    (md, curr) => md.concat([
      [curr]
    ]), []
  );

  arr = sortMArray(arr);

  while (array.length > 3) {
    array[2].push(array[3][0]);
    array.splice(3, 1);
    array = sortMArray(array);
  }

  return array;
}


// 计算数组元素和
const sum = (arr) => {
  if (!Array.isArray(arr)) return 0
  return arr.reduce(
    (total, curr) => total + curr, 0
  )
}

// 多维数组排序
function sortMArray(arr) {
  const comparator = (a, b) => {
    const sumA = sum(a)
    const sumB = sum(b)
    if (sumA < sumB) return 1;
    if (sumA > sumB) return -1;
    return 0
  }

  return arr.sort(comparator);
}

// const arr = [3, 8, 20, 15, 60, 1, 32];
const arr = [11, 42, 23, 45, 64, 56, 11, 23, 42, 56, 78, 90];

console.info(equal(arr))