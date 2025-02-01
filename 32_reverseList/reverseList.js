function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const reverseList = function(list) {
    let head = null;

    while(list) {
        head = new ListNode(list.val, head);
        list = list.next;
    }

    return head;
}

module.exports = reverseList;