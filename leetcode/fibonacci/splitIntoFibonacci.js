/**
 * @param {string} S
 * @return {number[]}
 */

var splitIntoFibonacci = function(S) {
  let len = S.length, ans = [], max = 2 ** 31 - 1;
  
  const dfs = (curr, S) => {
    if (S.length === 0) {
      return ans = curr;
    }
    
    if (curr.length <= 1) { // 数组中有 0 个或者 1 个元素，可以任意选择
      for (let i = 1; i < S.length; i++) {
        let str = S.slice(0, i);
        if (str.length > 1 && str.startsWith('0')) break;
        let num = Number( str );
        if (num > max) break;
        dfs(curr.concat( num ), S.slice(i));
      }
    } else { // 数组长度大于等于 2，看看下一个数是否出现在剩余的字符串的开头，是则继续
      let clen = curr.length;
      let nextNum = String(curr[clen - 1] + curr[clen - 2]);
      if (Number(nextNum) > max) return ;
      let targetIndex = S.indexOf(nextNum);
      if (targetIndex !== 0) {
        return ;
      }
      dfs(
        curr.concat( Number( S.slice(0, nextNum.length) ) ),
        S.slice(nextNum.length)
      );
    }
  }
  dfs([], S);
  
  return ans;
};
