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
