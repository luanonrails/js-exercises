function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const reverseList = require('./reverseList');

describe('reverseList', () => {
    // Given the head of a singly linked list, reverse the list, and return the reversed list
    test('input = [1, 2, 3, 4, 5] output = [5, 4, 3, 2, 1]', () => {
        const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        const reversedList = new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))));

        expect(reverseList(list)).toEqual(reversedList);
    });
    test('works with an empty list', () => {
        expect(reverseList(null)).toEqual(null);
    });
});