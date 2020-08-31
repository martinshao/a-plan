let arr = [1, 2, 3, 4, 5, 6];

// function permutation(a, m) {

//   let result = [];

//   let n = a.length;
//   m = m || n;

//   function recur(_a, tmpResult = []) {
//     if (tmpResult.length === m) {
//       result.push(tmpResult);
//     } else {
//       for (let i = 0; i < _a.length; i++) {
//         let tmpA = _a.concat();
//         let _tmpResult = tmpResult.concat();
//         _tmpResult.push(tmpA[i]);
//         tmpA.splice(i, 1);
//         recur(tmpA, _tmpResult);
//       }
//     }
//   }
//   recur(a);
//   return result;
// }

// console.log(permutation(arr));

// function combination(arr, num) {
//   const result = []
//   const range = function (r, _arr) {
//     if (r.length === num) {
//       result.push(r)
//     } else {
//       let len = r.length
//       for (let i = 0; i <= len; i++) {
//         range(r.concat(_arr[i]), _arr.slice(i + 1))
//         len = _arr.length - num + 1;
//       }
//     }
//   }
//   range([], arr)
//   return result
// }

// function comb(m, n) {
//   if (m < 0 || n < 0 || m < n) {
//     return 0;
//   }
//   n = n < (m - n) ? n : m - n;
//   if (n == 0) {
//     return 1;
//   }
//   var result = m;
//   for (var i = 2, j = result - 1; i <= n; i++, j--) {
//     result = result * j / i;
//   }
//   return result;
// }

function choose(arr, size) {
  var allResult = [];

  (function (arr, size, result) {
    var arrLen = arr.length;
    if (size > arrLen) {
      return;
    }
    if (size == arrLen) {
      allResult.push([].concat(result, arr))
    } else {
      for (var i = 0; i < arrLen; i++) {
        var newResult = [].concat(result);
        newResult.push(arr[i]);

        if (size == 1) {
          allResult.push(newResult);
        } else {
          var newArr = [].concat(arr);
          newArr.splice(0, i + 1);
          arguments.callee(newArr, size - 1, newResult);
        }
      }
    }
  })(arr, size, []);

  return allResult;
}

console.info(choose(arr, 3))