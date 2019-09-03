/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function ($head, $val) {
    if ($head == null) {
      return null;
    }
    $head.next = this.removeElements($head.next, $val);
    return $head.val == $val ? $head.next : $head;
};

const linkedlist = removeElements(l1, 2);