class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = value ?
      new Node(value) :
      new Node('head');
  }

  getLast() {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    return current
  }

  find(item) {
    let currNode = this.head;
    while (currNode.value !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  append(element) {
    const newNode = new Node(element)
    this.getLast().next = newNode
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr !== null) {
      let nodeTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nodeTemp;
    }
    return prev;

    // if (head == null || head.next == null) return head;
    // let p = this.reverse(head.next);
    // head.next.next = head;
    // head.next = null;
    // return p;
  }
}

function ArrayToLinkedList(array) {
  if (Array.isArray(array)) {
    let linkedList = new LinkedList(array[0]);
    for (let i = 1; i < array.length; i++) {
      linkedList.append(array[i])
    }
    return linkedList;
  } else {
    throw 'the param is not Array';
  }
}

const linkedList = ArrayToLinkedList([1, 2, 3, 4, 5, 6])

console.info(linkedList)

function mergeTwoLists(l1, l2) {
  const prehead = new Node(-1);

  let prev = prehead;
  while (l1 != null && l2 != null) {
    if (l1.value <= l2.value) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;

  return prehead.next;
};

function ArrayToLinkedList2(array) {
  if (Array.isArray(array)) {
    let head = new Node();
    let currentNode = head;
    for (let i = 0; i < array.length; i++) {
      if (currentNode.value === undefined) {
        currentNode.value = array[i];
      } else {
        let newNode = new Node(array[i]);
        currentNode.next = newNode;
        currentNode = newNode;
      }
    }
    return head;
  } else {
    throw 'the param is not Array';
  }
}

const l1 = ArrayToLinkedList2([1, 2, 4])
const l2 = ArrayToLinkedList2([1, 3, 4])

console.info(mergeTwoLists(l1, l2))