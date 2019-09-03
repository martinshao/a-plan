function ListNode(val) {
  this.val = val;
  this.next = null;
}

let c1 = new ListNode(8);
let c2 = new ListNode(4);
let c3 = new ListNode(5);

c1.next = c2;
c2.next = c3;

let a1 = new ListNode(4);
let a2 = new ListNode(1);

a1.next = a2;
a2.next = c1;

let b1 = new ListNode(5);
let b2 = new ListNode(0);
let b3 = new ListNode(1);

b1.next = b2;
b2.next = b3;
b3.next = c1;
 
// function ArrayToLinkedList(array) {
//   if (Array.isArray(array)) {
//     let head = new ListNode();
//     let currentNode = head;
//     for (let i = 0; i < array.length; i++) {
//       if (currentNode.val === undefined) {
//         currentNode.val = array[i];
//       } else {
//         let newNode = new ListNode(array[i]);
//         currentNode.next = newNode;
//         currentNode = newNode;
//       }
//     }
//     return head;
//   } else {
//     throw 'the param is not Array';
//   }
// }

// function LinkedListToArray(linkedList) {
//   const array = new Array();
//   let currentNode = linkedList;

//   while (currentNode) {
//     array.push(currentNode.val);
//     currentNode = currentNode.next;
//     console.info(array);
//   }
//   return array;
// }

// let l1 = ArrayToLinkedList([1,8,4,5]);
// let l2 = ArrayToLinkedList([1,8,4,5]);
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function (l1, l2) {
//   if (l1 == null) {
//     return l2;
//   } else if (l2 == null) {
//     return l1;
//   } else if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// };

// let l3 = mergeTwoLists(l1, l2);
// console.info(l3)