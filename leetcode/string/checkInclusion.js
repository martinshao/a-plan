/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const alpha = []
  for (let i = 97; i < 123; i++) {
    alpha.push(String.fromCharCode(i))
  }
  if (s1.length > s2.length) {
    return false
  }
  const s1map = Array(26).fill(0)
  for (const st of s1) {
    s1map[alpha.indexOf(st)]++
  }
  for (let i = 0; i <= s2.length - s1.length; i++) {
    const s2map = Array(26).fill(0)
    for (let j = 0; j < s1.length; j++) {
      const st = s2[i + j];
      s2map[alpha.indexOf(st)]++
    }
    if (matches(s1map, s2map)) {
      return true
    }
  }
  return false
};

const matches = function (s1map, s2map) {
  for (let i = 0; i < 26; i++) {
    if (s1map[i] != s2map[i]) return false
  }
  return true
}

const s1 = "ab",
  s2 = "eidbaooo"

const result = checkInclusion(s1, s2)

console.info(result)