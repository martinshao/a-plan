# 前端面试星球——算法

## 请用算法实现，从给定的无序、不重复的数组 data 中，取出 n 个数，使其相加和为 sum。并给出算法的时间/空间复杂度。（不需要找出所有的解，找到一个解即可。）

```js
function getAllCombin(array, n, sum, temp) {
  if (temp.length === n) {
    if (temp.reduce((t, c) => t + c) === sum) {
      return temp;
    }
    return;
  }
  for (let i = 0; i < array.length; i++) {
    const current = array.shift();
    temp.push(current);
    const result = getAllCombin(array, n, sum, temp);
    if (result) {
      return result;
    }
    temp.pop();
    array.push(current);
  }
}
const arr = [1, 2, 3, 4, 5, 6];

console.log(getAllCombin(arr, 3, 10, []));
```

## 合并二维有序数组成一维有序数组，归并排序的思路

```js
function mergeArray(arr) {
  if (arr.length <= 1) {
    return arr[0];
  }

  let mid = Math.floor(arr.length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid, arr.length);
  return merge(mergeArray(left), mergeArray(right));

  function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length) {
      result.push(left.shift());
    }

    while (right.length) {
      result.push(right.shift());
    }

    return result;
  }
}
```

## 字符串出现的不重复最长长度

```js
function lengthOfLongestSubstring(str) {
  const arr = [...str];
  let maxLen = 1;
  let result = arr.reduce((total, curr, i) => {
    if (i === 0) {
      return curr;
    } else {
      if (total.indexOf(curr) < 0) {
        return total + curr;
      } else if (maxLen < total.length) {
        maxLen = total.length;
        return total.slice(total.indexOf(curr) + 1, total.length) + curr;
      } else {
        return total.slice(total.indexOf(curr) + 1, total.length) + curr;
      }
    }
  }, '');

  if (maxLen < result.length) {
    maxLen = result.length;
  }

  return maxLen;
}

console.info(lengthOfLongestSubstring('loddktdji'));
```

## 多种方式实现斐波那契数列

```js
function fibonacci(n, map = {}) {
  if (n === 1 || n === 2) return 1;
  if (map[n]) return map[n];
  let data = fibonacci(n - 1, map) + fibonacci(n - 2, map);
  map[n] = data;
  return data;
}

// 尾递归优化
function fibonacci(n, v1 = 1, v2 = 1) {
  if (n === 1) return v1;
  if (n === 2) return v2;
  return fibonacci(n - 1, v2, v1 + v2);
}

// 循环替代递归
function fibonacci(n) {
  let pre = 1;
  let cur = 1;
  let data = null;
  if (n === 1 || n === 2) return 1;
  for (let i = 3; i <= n; i++) {
    data = pre + cur;
    pre = cur;
    cur = data;
  }
  return data;
}
```

## 有一堆数，请把他们分成三份，确保每一份和尽量相等

## Next Permutation

## 按要求实现代码

```js
/*
 * 根据传入参数n(数字)对一维数组(纯数字)按照距离n最近的顺序排序。(距离即数字与n的差值的绝对值)
 */
var arr = [7, 28, -1, 0, 7, 33];
function sort(n) {
  // your code
}
```

```js

```

## 输入一个整数，输出该数二进制表示中 1 的个数

## 找出两个数组的交集元素

## 用 js 实现随机选取 10~100 之间的 10 个且不重复的数字，存入一个数组，还要排序
``` js
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
```