/**
 * @param {string} s
 * @return {string[]}
 */
// var restoreIpAddresses = function (s) {
//   const results = []
//   let sb = ''
//   const chars = Array.from(s)

//   dfs(0, 0)
//   return this.results

//   function dfs(count, i) {
//     if (count == 4 && i == chars.length) {
//       results.push(sb)
//       return
//     }

//     let remainCount = 4 - count
//     let remainsChars = chars.length - i
//     if (remainCount > remainsChars || remainCount * 3 < remainsChars) {
//       return
//     }
//     console.info(remainCount, remainsChars)
//     const len = sb.length
//     const maxLen = chars[i] == '0' ? 1 : 3
//     for (let j = 0; j < maxLen && i + j < chars.length; j++) {
//       console.info('i::::', i)
//       if (j == 2 && chars[i] * 100 + chars[i + 1] * 10 + chars[i + 2] > 255) {
//         console.info(`j:${j}-i:${i}:::`, chars[i] * 100, chars[i + 1], chars[i + 2])
//         continue
//       }
//       for (let k = 0; k <= j; k++) {
//         sb = sb + chars[i + k]
//         console.info(chars[i + k])
//       }
//       if (count < 3) {
//         sb = sb + '.'
//       }
//       console.info('sb', sb, results)
//       dfs(count + 1, i + j + 1);
//       sb = sb.substr(0, len) + sb.substr(count < 3 ? len + j + 2 : len + j + 1);
//     }
//   }
// };

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let n;
  const segments = []
  const output = []

  function valid(segment) {
    const m = segment.length
    if (m > 3) return false
    return (segment.charAt(0) != '0') ? parseInt(segment) <= 255 : (m == 1)
  }

  function update_output(curr_pos) {
    let segment = s.substring(curr_pos + 1, n)
    if (valid(segment)) {
      segments.push(segment)
      output.push(segments.join('.'))
      segments.pop();
    }
  }

  function backTrack(prev_pos, dots) {
    let max_pos = Math.min(n - 1, prev_pos + 4)
    for (let curr_pos = prev_pos + 1; curr_pos < max_pos; curr_pos++) {
      let segment = s.substring(prev_pos + 1, curr_pos + 1)
      if (valid(segment)) {
        segments.push(segment)
        if (dots - 1 == 0) {
          update_output(curr_pos)
        } else {
          backTrack(curr_pos, dots - 1)
        }
        segments.pop()
      }
    }
  }

  n = s.length
  backTrack(-1, 3)
  return output
};

const chaosIP = "25525511135"

const ip = restoreIpAddresses(chaosIP)

console.info(ip)