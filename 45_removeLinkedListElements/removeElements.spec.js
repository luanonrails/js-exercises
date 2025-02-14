function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const removeElements = require('./removeElements');

describe('removeElements', () => {
    // Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
    test('head = [1, 2, 6, 3, 4, 5, 6] val = 6 output = [1, 2, 3, 4, 5]', () => {
        const head = new ListNode(1, new ListNode(2), new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))));
        const val = 6;
        const output = new ListNode(1, new ListNode(2), new ListNode(3, new ListNode(4, new ListNode(5))));

        expect(removeElements(head, val)).toEqual(output);
    });
    test('head = [] val = 1 output = []', () => {
        const head = null;
        const val = 6;
        const output = null;

        expect(removeElements(head, val)).toEqual(output);
    });
    test('head = [7, 7, 7, 7] val = 7 output = []', () => {
        const head = new ListNode(7, new ListNode(7), new ListNode(7, new ListNode(7, new ListNode(7))));
        const val = 7;
        const output = null;

        expect(removeElements(head, val)).toEqual(output);
    });
});