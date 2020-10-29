/**
 * 洗牌算法
 * https://github.com/ccforward/cc/issues/44
 */

// Fisher–Yates 第一种
[12, 4, 16, 3].sort(function () {
  return .5 - Math.random();
});

// Fisher-Yates 第二种
function shuffle(arr) {
  var result = [],
    random;
  while (arr.length > 0) {
    random = Math.floor(Math.random() * arr.length);
    result.push(arr[random])
    arr.splice(random, 1)
  }
  return result;
}

// Knuth-Durstenfeld 算法
function shuffle(arr) {
  var length = arr.length,
    temp,
    random;
  while (0 != length) {
    random = Math.floor(Math.random() * length)
    length--;
    // swap
    temp = arr[length];
    arr[length] = arr[random];
    arr[random] = temp;
  }
  return arr;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log(getRandomInt(3));
// expected output: 0, 1 or 2

// 得到一个大于等于0，小于1之间的随机数
function getRandom() {
  return Math.random();
}

// 得到一个两数之间的随机数，这个值不小于 min（有可能等于），并且小于（不等于）max
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// 得到一个两数之间的随机整数
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

// 得到一个两数之间的随机整数，包括两个数在内
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}