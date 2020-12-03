// 1. 爬楼梯到顶端共需要走n个台阶，每次你都可以选择爬1阶或2阶，问有几种不同的方法可以爬到顶端。

function getMethods(n: number): number {
  if (n < 1) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  return getMethods(n - 1) + getMethods(n - 2);
}

// 2. 给一个二叉树，判断他是不是镜像树(从root为中心，左边和右边为镜像)。

class TreeNode {
  constructor(value) {
    this._value = value;
    this.left = this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.tree = null
  }

  preOrder(tree = this.tree) {
    console.info(tree.value)
    if(tree.left) this.preOrder(tree.left)
    if(tree.right) this.preOrder(tree.right)
  }
}

// 思路

// 一个栈结构;

// 完全二叉树的判断 层序遍历？

// [1,2,2,3,4,4,3]

function isMirror(root) {
  const stack = [];
  let currentNode = root;

  while (currentNode.value) {
    if (currentNode.left) {
      stack.unshift(currentNode.value);
    }
    if (currentNode.right) {

    }
    return false;
  }
}

// 1.得到所有可能的路径
// 2.得到路径的过程中求和，判断

function isTarget(arr, target) {
  return arr.reduce((acc, curr) => acc + curr, 0) === target
}

function hasTarget(tree, target) {
  const arr = []
  let result = false

  function preOrder(tree) {
    arr.push(tree.value);
    if(tree.left) this.preOrder(tree.left);
    if(isTarget(arr, target)) {
      result = true
    } else {
      arr.pop()
    }
    if(tree.right) this.preOrder(tree.right);
  }

  preOrder(tree)

  if(result) return true
  return false;
}

