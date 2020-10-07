# 70 道题 leetcode 入门节奏

![70days-leetcode-svg](../assets/LeetCode70days.svg)

## 数组

### 1.两数之和

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
