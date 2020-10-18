# 70 道题 leetcode 入门节奏

![70days-leetcode-svg](../assets/LeetCode70days.svg)

## 索引

- 数据结构
  - [数组](#数组)
    - [1. 两数之和](#1-两数之和)
    - [268. 缺失数字](#268-缺失数字)
    - [78. 子集](#78-子集)
    - [90. 子集 II](#90-子集-ii)
  - [链表](#链表)
- 算法
  - [二分法](#二分法)
    - [704.二分查找法](#704-二分查找)
    - [35. 搜索插入位置](#35-搜索插入位置)
    - [162. 寻找峰值](#162-寻找峰值)
  - [双指针](#双指针)
    - [344. 反转字符串](#344-反转字符串)
    - [27. 移除元素](#27-移除元素)
    - [125. 验证回文串](#125-验证回文串)

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

```js

```

## 双指针

### 344. 反转字符串

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

```js
e.g. 1:
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]

e.g. 2:
输入：["H","a","n","n","a","h"]
输出：["h","a","n","n","a","H"]
```

```js
var reverseString = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};
```

### 27. 移除元素

给你一个数组 nums  和一个值 val，你需要 原地 移除所有数值等于  val  的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

```js
e.g. 1:
给定 nums = [3,2,2,3], val = 3,
函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
你不需要考虑数组中超出新长度后面的元素。

e.g. 2:
给定 nums = [0,1,2,2,3,0,4,2], val = 2,
函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
注意这五个元素可为任意顺序。
你不需要考虑数组中超出新长度后面的元素。
```

```js
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

// 这个性能更好,快差不多一被
var removeElement = function (nums, val) {
  let ans = 0;
  for (const num of nums) {
    if (num != val) {
      nums[ans] = num;
      ans++;
    }
  }
  return ans;
};
```

### 125. 验证回文串

给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

```js
e.g. 1:
输入: "A man, a plan, a canal: Panama"
输出: true

e.g. 2:
输入: "race a car"
输出: false
```

```js
var isPalindrome = function (s, l = 0, r = s.length - 1) {
  while (l < r) {
    if (/[\W|_]/.test(s[l]) && ++l) continue;
    if (/[\W|_]/.test(s[r]) && r--) continue;
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++, r--;
  }
  return true;
};
```
