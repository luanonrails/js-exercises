function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const addTwoNumbers = function(l1, l2) {
    const head = new ListNode();
    let current = head;
    let carry = 0;
    while(current) {
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        current.val = sum % 10;

        carry = Math.floor(sum / 10);
        current.next = l1?.next || l2?.next || carry ? new ListNode() : null;
        current = current.next;

        l1 = l1?.next;
        l2 = l2?.next;
    }
    return head;
}

module.exports = addTwoNumbers;