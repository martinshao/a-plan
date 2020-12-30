var nodes = {
  node: 6,
  left: {
    node: 5,
    left: {
      node: 4,
      left: null,
      right: null,
    },
    right: {
      node: 3,
      left: null,
      right: null,
    },
  },
  right: {
    node: 2,
    left: null,
    right: {
      node: 1,
      left: null,
      right: null,
    },
  },
};

// var result = [];
// var dfs = function (nodes) {
//   if (nodes.node) {
//     result.push(nodes.node);
//     nodes.left && dfs(nodes.left);
//     nodes.right && dfs(nodes.right);
//   }
// };
// dfs(nodes);
// console.log(result);

// var result = [];
// var queue = [nodes];
// var bfs = function (count) {
//   count = count || 0;
//   if (queue[count]) {
//     result.push(queue[count].node);
//     var left = queue[count].left;
//     var right = queue[count].right;
//     if (left) {
//       queue.push(left);
//     }
//     if (right) {
//       queue.push(right);
//     }
//     bfs(++count);
//   }
// };
// bfs();

var bfs = function (nodes) {
  var result = [];
  var queue = [];
  var pointer = 0;
  queue.push(nodes);
  while (pointer < queue.length) {
    const item = queue[pointer++]; // 这里不使用 shift 方法（复杂度高），用一个指针代替
    result.push(item.node);
    item.left && queue.push(item.left);
    item.right && queue.push(item.right);
  }
  return result;
};
console.log(bfs(nodes));

// 真是妙蛙种子吃着妙脆角妙进了米奇妙妙屋，妙到家了

const accounts = [
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['John', 'johnnybravo@mail.com'],
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['Mary', 'mary@mail.com'],
];
const Output = [
  ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
  ['John', 'johnnybravo@mail.com'],
  ['Mary', 'mary@mail.com'],
];
