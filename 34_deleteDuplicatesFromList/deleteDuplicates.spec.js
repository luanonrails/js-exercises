function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const deleteDuplicates = require('./deleteDuplicates')

describe('deleteDuplicates', () => {
    // Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
    // Return the linked list sorted as well.

    test('input = [1, 1, 2] output = [1, 2]', () => {
        const input = new ListNode(1, new ListNode(1, new ListNode(2)));
        const output = new ListNode(1, new ListNode(2));

        expect(deleteDuplicates(input)).toEqual(output);
    });
    test('input = [1, 1, 2, 3, 3] output = [1, 2, 3]', () => {
        const input = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
        const output = new ListNode(1, new ListNode(2, new ListNode(3)));

        expect(deleteDuplicates(input)).toEqual(output);
    });
    test('input = [] output = []', () => {
        expect(deleteDuplicates(null)).toBe(null);
    });
    test('input = [0, 0, 0] output = [0]', () => {
        const input = new ListNode(0, new ListNode(0, new ListNode(0)));
        const output = new ListNode(0);

        expect(deleteDuplicates(input)).toEqual(output);
    });
});