/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const str = s.split(' ').filter(st => !!st)
  return str.reverse().join(' ')
};

const content = "  the sky is blue!"

reverseWords(content)