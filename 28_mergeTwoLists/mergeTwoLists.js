function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null;
    const head = new ListNode();
    let current = head;

    while (list1 || list2) {
        if (list1 && (!list2 || list1.val < list2.val)) {
            current.val = list1.val;
            list1 = list1.next;
        } else {
            current.val = list2.val;
            list2 = list2.next;
        }

        current.next = list1 || list2 ? new ListNode() : null;
        current = current.next;
    }
    return head;
}

module.exports = mergeTwoLists;