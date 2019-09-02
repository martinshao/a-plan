var LinkedList = function (val) {
  this.value = val;
  this.next = null;

}

var MyLinkedList = function () {
  this.length = 0
  this.head = new LinkedList(-1);
};
MyLinkedList.prototype.get = function (index) {
  if (index >= this.length || index < 0)
    return -1;
  let curr = this.head;
  for (let i = 0; i <= index; i++)
    curr = curr.next;
  return curr.value;
};
MyLinkedList.prototype.addAtHead = function (val) {
  let temp = new LinkedList(val);
  temp.next = this.head.next;
  this.head.next = temp;
  this.length++;
};
MyLinkedList.prototype.addAtTail = function (val) {
  let current = this.head;
  while (current.next != null)
    current = current.next;
  let temp = new LinkedList(val);
  current.next = temp;
  this.length++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length)
    return;
  if (index == this.length) {
    this.addAtTail(val);
    return;
  }
  if (index < 0)
    index = index + this.length + 1;
  let current = this.head;
  for (let i = 0; i < index; i++)
    current = current.next;
  let ptr = current.next;
  let temp = new LinkedList(val);
  current.next = temp;
  temp.next = ptr;
  this.length++;
}
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.length || index < 0)
    return;
  let current = this.head;
  for (let i = 0; i < index; i++)
    current = current.next;
  current.next = current.next.next;
  this.length--;
};

let linkedlist = new MyLinkedList();
// linkedlist.addAtHead(5);
// linkedlist.addAtHead(2);
linkedlist.addAtHead(1);
linkedlist.addAtTail(3);
linkedlist.addAtIndex(0, 2);
// linkedlist.deleteAtIndex(0);
// linkedlist.get(1);