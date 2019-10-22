
function BinTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

let a = new BinTreeNode('A');
let b = new BinTreeNode('B');
let c = new BinTreeNode('C');
let d = new BinTreeNode('D');
let e = new BinTreeNode('E');
let f = new BinTreeNode('F');
let g = new BinTreeNode('G');
let h = new BinTreeNode('H');
let i = new BinTreeNode('I');

g.left = h;
c.left = g;
c.right = i;

f.left = e;
b.left = d;
b.right = f;

a.left = b;
a.right = c;

function preOrderTraversal(BinTree) {
  if(BinTree) {
    console.info(BinTree.value);
    preOrderTraversal(BinTree.left);
    preOrderTraversal(BinTree.right);
  }
}

preOrderTraversal(a);