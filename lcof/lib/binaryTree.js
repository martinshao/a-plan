// class TreeNode<T> {
//   val: T;
//   left: TreeNode<T> | null;
//   right: TreeNode<T> | null;
//   constructor(val: T) {
//     this.val = val;
//     this.left = this.right = null;
//   }
// }

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const node1 = new TreeNode(1);

function buildBiaryTree(arr) {
  const list = [];
  arr.forEach((el) => {
    let node = null;
    if (el !== null) {
      node = new TreeNode(el);
    }
    list.push(node);
  });

  if (list.length > 0) {
    for (let i = 0; i < (arr.length >> 1) - 1; i++) {
      if (list[2 * i + 1] !== undefined) {
        list[i].left = list[2 * i + 1];
      }
      if (list[2 * i + 2] !== undefined) {
        list[i].right = list[2 * i + 2];
      }
    }
    let lastIndex = (arr.length >> 1) - 1;
    list[lastIndex].left = list[lastIndex * 2 + 1];
    if (arr.length % 2 === 1) {
      list[lastIndex].right = list[lastIndex * 2 + 2];
    }
  }
  return list[0];
}

// const root = [4, 2, 7, 1, 3, 6, 9];
// const root = [3, 9, 20, null, null, 15, 7];
const root = [1, 2, 2, 3, 3, null, null, 4, 4];

const binaryTree = buildBiaryTree(root);

console.info(binaryTree);

function recursionPreorderTraversal(root) {
  if (root !== null) {
    console.info(root.val + ' ');
    recursionPreorderTraversal(root.left);
    recursionPreorderTraversal(root.right);
  }
}

function recursionMiddleorderTraversal(root) {
  if (root !== null) {
    recursionMiddleorderTraversal(root.left);
    console.info(root.val + ' ');
    recursionMiddleorderTraversal(root.right);
  }
}

function recursionPostorderTraversal(root) {
  if (root !== null) {
    recursionPostorderTraversal(root.left);
    recursionPostorderTraversal(root.right);
    console.info(root.val + ' ');
  }
}

function levelTraverse(root) {
  if (root === null) return [];
  const queue = [];
  const res = [];
  queue.push(root);
  while (queue.length !== 0) {
    const node = queue.shift();
    res.push(node.val);
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
  return res;
}

function levelOrder(root) {
  if (root === null) return [];
  const queue = [];
  const res = [];
  queue.push(root);
  while (queue.length !== 0) {
    const temp = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      temp.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    res.push(temp);
  }
  return res;
}

recursionPreorderTraversal(binaryTree);
console.info('-----------------------------');
recursionMiddleorderTraversal(binaryTree);
console.info('-----------------------------');
recursionPostorderTraversal(binaryTree);
console.info('-----------------------------');
levelTraverse(binaryTree);
console.info('-----------------------------');
console.info(levelOrder(binaryTree));
