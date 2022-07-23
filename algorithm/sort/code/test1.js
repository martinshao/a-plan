// const curry = function(fn) {
//   const args = Array.from(arguments).slice(1)
//   return function () {
//     const newArgs = args.concat(Array.from(arguments))
//     return fn.apply(this, newArgs)
//   }
// }

// function curry(fn, length) {
//   length = length || fn.length

//   const slice = Array.prototype.slice

//   return function() {
//     if (arguments.length < length) {
//       const combined = [fn].concat(slice.call(arguments))
//       return curry(sub_curry.apply(this, combined), length - arguments.length)
//     } else {
//       return fn.apply(this, arguments)
//     }
//   }
// }

// function add(a, b) {
//   return a + b;
// }

// var addCurry = curry(add, 1, 2);
// console.info(addCurry()) // 3
// //或者
// var addCurry = curry(add, 1);
// console.info(addCurry(2)) // 3
// //或者
// var addCurry = curry(add);
// console.info(addCurry(1, 2)) // 3

const curry = (fn, ...args) =>
  args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args)

function add1(x, y, z) {
  return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));