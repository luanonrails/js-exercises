function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const deleteDuplicates = function(head) {
    if (!head) return null;
    const newList = new ListNode(head.val);
    let current = newList;

    while (head) {
        if (current.val != head.val) {
            current.next = new ListNode(head.val);
            current = current.next;
        }
        head = head.next;
    }

    return newList;
};

module.exports = deleteDuplicates;