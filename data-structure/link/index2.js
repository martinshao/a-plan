var Node = function (val) {
    this.value = val;
    this.next = null;
}


var MyLinkedList = function () {
    this.length = 0
    this.head = null;
};

MyLinkedList.prototype.get = function (index) {
    if (index >= this.length || index < 0)
        return -1;
    let prev = null
    let current = this.head;
    for (let i = 0; i <= index; i++) {
        prev = current;
        current = current.next;
    }
    return prev.value;
};
MyLinkedList.prototype.addAtHead = function (val) {
    if (!this.head) {
        this.length++;
        return this.head = new Node(val);
    }
    let curr = this.head;
    let temp = new Node(val);
    this.head = temp;
    temp.next = curr;
    this.length++;
};
MyLinkedList.prototype.addAtTail = function (val) {
    if (!this.head) {
        this.length++;
        return this.head = new Node(val);
    }
    let current = this.head;
    while (current.next != null)
        current = current.next;
    let temp = new Node(val);
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
    if (index < 0) {
        this.addAtHead(val);
        return
    }
    let prev = null
    let curr = this.head;
    let temp = new Node(val);
    if (index === 0) {
        this.head = temp;
        temp.next = curr;
        return this.length++;
    }
    for (let i = 0; i < index; i++) {
        prev = curr
        curr = curr.next;
    }
    prev.next = temp;
    temp.next = curr;
    this.length++;
}
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.length || index < 0)
        return;
    if (index === 0) {
        this.head = this.head.next;
        this.length--;
        return;
    }
    let prev = null;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        prev = curr;
        curr = curr.next;
    }
    console.info(curr);
    if (curr.next) {
        prev.next = curr.next;
    } else {
        prev.next = null
    }
    this.length--;
};

let linkedlist = new MyLinkedList();
linkedlist.addAtHead(5);
linkedlist.addAtHead(2);
// linkedlist.deleteAtIndex(1);