function lenLongestFibSubseq(arr) {
  const len = arr.length
  const S = new Set()
  for (const x of arr) {
    S.add(x)
  }

  let ans = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let x = arr[j],
        y = arr[i] + arr[j];
      let length = 2;
      while (S.has(y)) {
        let tmp = y;
        y += x;
        x = tmp;
        ans = Math.max(ans, ++length);
      }
    }
  }
  return ans >= 3 ? ans : 0;
}

// function lenLongestFibSubseq(arr) {
//   const len = arr.length;
//   const index = new Map();
//   arr.forEach((el, idx) => {
//     index.set(el, idx)
//   });

//   const longest = new Map()
//   let ans = 0;

//   for (let k = 0; k < len; k++) {
//     for (let j = 0; j < k; j++) {
//       console.info('...', index.has(arr[k] - arr[j]))
//       let i = index.has(arr[k] - arr[j]) ? index.get(arr[k] - arr[j]) : -1
//       if (i >= 0 && i < j) {
//         console.info('---', longest.has(i * len + k))
//         let cand = longest.has(i * len + j) ? longest.get(i * len + j) : 2;
//         longest.set(j * len + k, cand + 1)
//         ans = Math.max(ans, cand + 1)
//       }
//     }
//   }
//   return ans >= 3 ? ans : 0;
// }

console.info(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8]))