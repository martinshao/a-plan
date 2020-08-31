// 按位运算符的妙用
// function numberOfOne(number) {
//   let count = 0
//   while (number) {
//     number &= (number - 1);
//     ++count;
//   }
//   return count
// }

// function numberOfOne(n) {
//   if (n < 0) {
//     n = n >>> 0
//   }

//   const arr = n.toString(2).split('')
//   return arr.reduce((total, curr) => (curr === '1' ? total + 1 : total), 0)
// }

function numberOfOne(n) {
  let res = 0;
  while (n !== 0) {
    res += n & 1
    n >>>= 1
  }
  return res
}

console.info(numberOfOne(23))