/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var isPalindrome = function (head) {
  console.info('isPalindrome', head);
  let fast = head;
  let slow = head;
  let prev = null;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.info('slow', slow);
  console.info('fast', fast);
  while (slow) {
    let ovn = slow.next;
    slow.next = prev;
    prev = slow;
    slow = ovn; 
  }
  console.info('prev', prev);
  console.info('head', head);
  while (head && prev) {//check
    console.info(head.val, prev.val);
    if (head.val !== prev.val) {
      return false;
    }
    head = head.next;
    prev = prev.next;
  }
  return true;
};

const flag = isPalindrome(l2)