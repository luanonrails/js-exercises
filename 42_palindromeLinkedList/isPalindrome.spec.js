function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}

const isPalindrome = require('./isPalindrome');

describe('isPalindrome', () => {
    // Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
    test('head = [1, 2, 2, 1] output = true' ,() => {
        const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));
        expect(isPalindrome(head)).toBe(true)
    });
    test('head = [1, 2] output = false' ,() => {
        const head = new ListNode(1, new ListNode(2));
        expect(isPalindrome(head)).toBe(false)
    });
})