function fibonacci(n, map = {}) {
  if (n === 1 || n === 2) return 1
  if (map[n]) return map[n]
  let data = fibonacci(n - 1, map) + fibonacci(n - 2, map)
  map[n] = data
  return data
}

// console.info(fibonacci(2))


// function climbStairs(n) {
//   if (n == 1 || n == 2) return n;
//   return climbStairs(n - 1) + climbStairs(n - 2);
// }

// function f(n) {
//   if (n == 1) return 1;
//   if (n == 2) return 2;
//   let ret = 0,
//     pre = 2,
//     prepre = 1;
//   for (let i = 3; i <= n; i++) {
//     ret = pre + prepre; //当前楼梯数方法总是前两个楼梯数方法之和
//     prepre = pre;
//     pre = ret;
//   }
//   return ret;
// }

// 循环替代递归
function fibonacci(n) {
  let pre = 1;
  let cur = 1;
  let data = null;
  if (n === 1 || n === 2) return 1;
  for (let i = 3; i <= n; i++) {
    data = pre + cur;
    pre = cur
    cur = data
  }
  return data
}

console.info(fibonacci(6))


// 尾递归优化
function fibonacci(n, v1 = 1, v2 = 1) {
  if (n === 1) return v1
  if (n === 2) return v2
  return fibonacci(n - 1, v2, v1 + v2)
}