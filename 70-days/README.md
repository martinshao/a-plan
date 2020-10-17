# 70 道题 leetcode 入门节奏

![70days-leetcode-svg](../assets/LeetCode70days.svg)

## 索引

- 数据结构
  - 数组
- 算法
  - 二分法
    - [704.二分查找法](#704-二分查找)

## 数组

### 1. 两数之和

给定一个整数数组 nums  和一个目标值 target，请你在该数组中找出和为目标值的那   两个   整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

```js
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

暴力破解法：

```js
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
```

哈希表：

```js
function twoSum(nums, target) {
  const map = new Map();
  nums.forEach((el, idx) => {
    map.set(el, idx);
  });

  for (let i = 0; i < nums.length; i++) {
    let targetKey = target - nums[i];
    if (map.has(targetKey) && i !== map.get(targetKey)) {
      return [i, map.get(targetKey)];
    }
  }
}
```

### 268. 缺失数字

给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

```js
输入: [3, 0, 1];
输出: 2;

输入: [9, 6, 4, 2, 3, 5, 7, 0, 1];
输出: 8;
```

使用 Set 数据结构

```js
function missingNumber(nums) {
  const set = new Set(nums);
  for (let i = 0; i < nums.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
  return -1;
}
```

### 78. 子集

给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

```js
输入: nums = [1, 2, 3];
输出: [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []];
```

```js
function subsets(nums) {
  const ans = [];
  const n = nums.length;
  for (let mask = 0; mask < 1 << n; ++mask) {
    const t = [];
    for (let i = 0; i < n; ++i) {
      if (mask & (1 << i)) {
        t.push(nums[i]);
      }
    }
    ans.push(t);
  }
  return ans;
}
```

### 90. 子集 II

给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

```js
输入: [1, 2, 2];
输出: [[2], [1], [1, 2, 2], [2, 2], [1, 2], []];
```

## 链表

### 206. 反转链表

反转一个单链表。

```js
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

## 二分法

### 704. 二分查找

给定一个  n  个元素有序的（升序）整型数组  nums 和一个目标值  target  ，写一个函数搜索  nums  中的 target，如果目标值存在返回下标，否则返回 -1。

```js
示例1:
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4

示例2:
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length;
  let left = 0,
    right = len - 1,
    mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
```

> 备注:
> `mid = left + Math.floor((right - left) / 2);` 的写法可以替换为
> `mid = left + ((right - left) >> 1)` 这种写法就是用位运算的除以 2 写法，还能向下取整。

### 35. 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

```js
e.g. 1:
输入: [1, 3, 5, 6], 5;
输出: 2;

e.g. 2:
输入: [1, 3, 5, 6], 2;
输出: 1;

e.g. 3:
输入: [1, 3, 5, 6], 7;
输出: 4;

e.g. 4:
输入: [1, 3, 5, 6], 0;
输出: 0;
```

```js
var searchInsert = function (nums, target) {
  let len = nums.length;

  while (len) {
    if (target > nums[len - 1]) {
      return len;
    } else {
      len--;
    }
  }
  return len;
};

var searchInsert = function (nums, target) {
  const n = nums.length;
  let left = 0,
    right = n - 1,
    ans = n;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
```

### 162. 寻找峰值

峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组  nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

你可以假设  nums[-1] = nums[n] = -∞。

```js
e.g. 1:
输入: nums = [1,2,3,1]
输出: 2
解释: 3 是峰值元素，你的函数应该返回其索引 2。

e.g. 2:
输入: nums = [1,2,1,3,5,6,4]
输出: 1 或 5
解释: 你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
```

``` js

```