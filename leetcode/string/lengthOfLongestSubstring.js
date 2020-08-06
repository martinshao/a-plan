/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       let curr = s.substring(i, j);
//       if (curr.includes(s.charAt(j))) {
//         break;
//       } else {
//         let lengths = j - i + 1;
//         if (lengths >= max) {
//           max = lengths;
//         }
//       }
//     }
//   }
//   return max;
// };

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let curr = s.substring(i, j);
      if (curr.includes(s.charAt(j))) {
        break;
      } else {
        max = Math.max(max, (j - i + 1))
      }
    }
  }
  return max;
};


let test1 = "abcabcbb";
let test2 = "bbbbb";
let test3 = "pwwkew";

console.info(lengthOfLongestSubstring(test1));