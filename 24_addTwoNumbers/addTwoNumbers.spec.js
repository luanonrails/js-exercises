const addTwoNumbers = require('./addTwoNumbers');

describe('addTwoNumbers', () => {
    // You are given two non-empty linked lists representing two non-negative integers.
    // The digits are stored in reverse order, and each of their nodes contains a single digit.
    // Add the two numbers and return the sum as a linked list.
    // You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    test('342 + 465 = 807', () => {
        const l1 = {val: 2, next: {val: 4, next: {val: 3, next: null}}};
        const l2 = {val: 5, next: {val: 6, next: {val: 4, next: null}}};
        const sum = {val: 7, next: {val: 0, next: {val: 8, next: null}}};

        expect(addTwoNumbers(l1, l2)).toEqual(sum);
      });
      test('0 + 0 = 0', () => {
        const l1 = {val: 0, next: null};
        const l2 = {val: 0, next: null};
        const sum = {val: 0, next: null};

        expect(addTwoNumbers(l1, l2)).toEqual(sum);
      });
      test('99 + 99 = 198', () => {
        const l1 = {val: 9, next: {val: 9, next: null}};
        const l2 = {val: 9, next: {val: 9, next: null}};
        const sum = {val: 8, next: {val: 9, next: {val: 1, next: null}}};

        expect(addTwoNumbers(l1, l2)).toEqual(sum);
      });
  });