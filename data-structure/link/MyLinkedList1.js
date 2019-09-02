var LinkedList = function (val) {
  this.val = val;
  this.next = null;

}
var MyLinkedList = function () {
  let length = 0
  this.head = new LinkedList('head');
};
MyLinkedList.prototype.get = function (index) {
  var current = this.head;
  for (var i = 0; i < index; i++) {
    current = current.next;
  }
  return current.val;
};
MyLinkedList.prototype.addAtHead = function (val) {
  var newNode = new LinkedList(val);
  var current = this.head;
  if (!current) {
    this.head = newNode;
  } else {
    newNode.next = current;
    this.head = newNode;
  }
};
MyLinkedList.prototype.addAtTail = function (val) {
  var newNode = new LinkedList(val);
  var current = this.head;
  if (!current) {
    this.head = newNode;
  } else {
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if(index < 0) return this.addAtHead(val);
  var newNode = new LinkedList(val);
  let current = this.head;
  for (let i = 0; i < index - 1; i++) {
    if (!current || !current.next) return null
    current = current.next
  }
  if (!current.val && current.val !== 0) return null
  newNode.next = current.next;
  current.next = newNode;
}
MyLinkedList.prototype.deleteAtIndex = function (index) {
  current = this.head;
  var node;
  if (index == 1) {
    head = current.next;
  }
  else {
    for (var k = 0; k < index; j++) {
      current = current.next;
    }
    node = current;
    current = current.next;
    node.next = current.next;
  }

};

let linkedlist = new MyLinkedList();
linkedlist.get(0);
linkedlist.addAtIndex(1, 2);