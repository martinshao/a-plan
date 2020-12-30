const s = 'lrloseumgh',
  k = 6;

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 * @result 通过 
 */
var reverseLeftWords = function (s, n) {
  let arr = s.split('');
  while (n) {
    let header = arr.shift();
    arr.push(header);
    n--;
  }
  return arr.join('');
};

console.info(reverseLeftWords(s, k));
