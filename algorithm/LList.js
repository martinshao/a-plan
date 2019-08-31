
function Node(element) {
  this.element = element;
  this.next = null;
}

function find(item) {
  var currNode = this.head;
  while(currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

function display() {
  var current = this.head;
  while(!(currNode.next == null)) {
    console.info(currNode.next.element);
    currNode = currNode.next;
  }
}

function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  // this.remove = remove;
  this.display = display;
}

var cities = new LList();
cities.insert('Conway', 'head');