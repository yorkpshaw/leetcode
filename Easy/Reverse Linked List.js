/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    let prev = null
    let next = null
    let current = head
    while(current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
        return prev;
    };

    // reverse(){
    //     var node = this.head;
    //     this.head = this.tail;
    //     this.tail = node;
    //     var next;
    //     var prev = null;
    //     for(var i = 0; i < this.length; i++){
    //       next = node.next;
    //       node.next = prev;
    //       prev = node;
    //       node = next;
    //     }
    //     return this;

    // 1 -> 2 -> 3 -> 4 -> null
    // Head node is the argument being passed
    // Set prev/next (or left/right) pointers to be null
    // Set the head to the current pointer
    // Loop while current !== null which would mean you're at the end

    // Set next to current.next next = 2 -> 3 -> 4 -> null
    // Set current.next to previous current = 1 -> null
    // Set previous to current prev = 1 -> null
    // Set current to next current = 2 -> 3 -> 4 -> null
    // Repeat until the end is reached

    // Return prev as the new head of the reversed list
    // prev = 2 -> 1 -> null
    // next = 3 -> 4 -> null
    // current = 3 -> 4 -> null

    // prev = 3 -> 2 -> 1 -> null
    // next = 4 -> null
    // current = 4 -> null

    // prev = 4 -> 3 -> 2 -> 1 -> null
    // next = null
    // current = null
