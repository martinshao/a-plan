class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
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
    // let prev = null;
    // let curr = this.head;
    // while (curr !== null) {
    //   let nodeTemp = curr.next;
    //   curr.next = prev;
    //   prev = curr;
    //   curr = nodeTemp;
    // }
    // return prev;

    if (this.head == null || this.head.next == null) return this.head;
    let p = reverse(head.next);
    this.head.next.next = this.head;
    this.head.next = null;
    return p;
  }
}

function ArrayToLinkedList(array) {
  if (Array.isArray(array)) {
    let linkedList = new LinkedList();
    for (let i = 0; i < array.length; i++) {
      linkedList.append(array[i])
    }
    return linkedList;
  } else {
    throw 'the param is not Array';
  }
}

const linkedList = ArrayToLinkedList([1, 2, 3, 4, 5, 6])

console.info(linkedList)