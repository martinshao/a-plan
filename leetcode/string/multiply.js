/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let l1 = num1.length - 1
  let l2 = num2.length - 1
  const result = []
  let carry = 0
  while (l1 >= -1 || l1 >= -1) {
    console.info(l1, l2)
    let n1 = l1 > -1 ? num1.charAt(l1) : 1
    let n2 = l2 > -1 ? num2.charAt(l2) : 1
    const rs = Number(n1) * Number(n2) + carry
    carry = parseInt(rs / 10)
    result.unshift(rs % 10)
    console.info(result)
    l1--;
    l2--;
  }
  return result
};

const num1 = "23",
  num2 = "456"

const result = multiply(num1, num2)
console.info(result)