# leetcode解题过程总结

## 3. 无重复字符的最长子串

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

``` bash
输入: "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2:

``` bash
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3:

``` bash
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

首先的解题思路是暴力破解法，利用双层遍历的方法，获取所有无重复的字串，然后从中比对出最长字串，得到最长字串的长度

时间复杂度：O(n^2)

``` js
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let curr = s.substring(i, j);
      if (curr.includes(s.charAt(j))) {
        break;
      } else {
        let lengths = j - i + 1;
        if (lengths >= max) {
          max = lengths;
        }
      }
    }
  }
  return max;
};
```
