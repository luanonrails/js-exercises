const hasCycle = require('./hasCycle');

describe('hasCycle', () => {
    // Given head, the head of a linked list, determine if the linked list has a cycle in it
    test('return true', () => {
        const tail = {val: 6, next: null};
        const head = {val: 1, next: {val: 3, next: tail}}
        tail.next = head;

        expect(hasCycle(head)).toBe(true);
    });
    test('return false', () => {
        const head = {val: 2, next: {val: 4, next: {val: 6, next: null}}};

        expect(hasCycle(head)).toBe(false);
    });
});