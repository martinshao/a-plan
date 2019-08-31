// 基类
class BinaryTreeNode {
  constructor(data) {
    this.key = data;
    this.left = null;
    this.right = null;
  }
}

//二叉查找树（BST）的类
class BinarySearchTree {
  constructor() {
    this.root = null; // 根节点
  }

  // 插入节点
  insert(key) {
    const newNode = new BinaryTreeNode(key);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
  preOrderTraverse() { } // 先序遍历
  inOrderTraverse() { } // 中序遍历
  postOrderTraverse() { } // 后序遍历
  search() { } // 查找节点
  getMin() { } // 查找最小值
  getMax() { } // 查找最大值
  remove() { } // 删除节点
}

let BST = new BinarySearchTree();
BST.insert(10);
BST.insert(11);
BST.insert(14);
BST.insert(12);
BST.insert(1);
BST.insert(2);
BST.insert(3);
BST.insert(6);
BST.insert(8);
BST.insert(9);
console.info(BST);