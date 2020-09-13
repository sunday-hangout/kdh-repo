/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(), ext = 0;
    var temp = head;
    while (l1 != null || l2 != null || ext != 0)
    {
        var sum = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + ext;
        ext = parseInt(sum / 10);
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
    
        l1 = l1 != null ? l1.next : null;
        l2 = l2 != null ? l2.next : null;
    }
    return head.next;
};
