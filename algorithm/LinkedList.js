
class Node{
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    let currNode = this.head;
    while(currNode && currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  last() {
    let currNode = this.head;
    while(currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  addFirst(newElement) {
    let newNode = new Node(newElement);
    newNode.next = this.head.next;
    this.head.next = newNode;
  }

  addTail(newElement) {
    let newNode = new Node(newElement);
    let tail = this.tail();
    tail.next = newNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  findPrevious(item) {
    let currNode = this.head;
    while(currNode.next !== null 
       && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode
  }

  remove(item) {
    console.info('remove...', item);
    let preNode = this.findPrevious(item);
    if(!(preNode.next == null)) {
      preNode.next = preNode.next.next;
    }
  }
  display() {
    let currNode = this.head;
    while(currNode.next !== null) {
      console.info(currNode.next.element);
      currNode = currNode.next;
    }
  }
}

const cities = new LinkedList();

cities.insert('Beijing', 'head');
cities.insert('Shanghai', 'Beijing');
cities.insert('Shenzhen', 'Shanghai');
cities.insert('Hefei', 'Shenzhen');
cities.insert('Hangzhou', 'Hefei');
cities.addFirst('shaogucheng');

cities.findPrevious('shaogucheng');
cities.display();
cities.remove('shaogucheng');
cities.display();
