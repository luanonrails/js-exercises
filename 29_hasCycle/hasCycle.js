function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const hasCycle = function(head) {
    while (head) {
        if (head.seen) {
            return true;
        }

        head.seen = true;
        head = head.next;
    }
    return false;
}

module.exports = hasCycle;