class Node {
  constructor(element) {
    this.element = element;
    this.previous = null;
    this.next = null;
  }
}

class DuLinkedList {
  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    let currNode = this.head;
    while (currNode && currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
  }

  remove(item) {
    let current = this.find(item);
    if (!(current == null)) {
      current.previous.next = current.next;
      current.next.previous = current.previous;
      current.next = null;
      current.previous = null;
    }
  }

  last() {
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }
}

const cities = new DuLinkedList();

cities.insert('Beijing', 'head');
cities.insert('Shanghai', 'Beijing');
cities.insert('Shenzhen', 'Shanghai');
cities.insert('Hefei', 'Shenzhen');
cities.insert('Hangzhou', 'Hefei');

if (null) {
  console.info('null is true');
}

if (undefined) {
  console.info('undefined is true');
}

