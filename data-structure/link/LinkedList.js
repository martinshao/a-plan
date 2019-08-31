class Node{
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList{
    constructor(val = null) {
        this.node = new Node(val);
    }

    addAtHead(val) {
        let current = this.node;
        let newNode = new Node(val);
        if(current.element) {
            newNode.next = current;
            this.node = newNode;
        } else {
            this.node = newNode;
        }
    }
}

let linkedList = new LinkedList();
linkedList.addAtHead(1);
linkedList.addAtHead(2);