const mergeTwoLists = require('./mergeTwoLists');

describe('mergeTwoLists', () => {
    // You are given the heads of two sorted linked lists list1 and list2
    // Merge the two lists into one sorted list
    // The list should be made by splicing together the nodes of the first two lists
    // Return the head of the merged linked list
    test('[1, 2, 4] + [1, 3, 4] = [1, 1, 2, 3, 4, 4]', () => {
        const list1 = {val: 1, next: {val: 2, next: {val: 4, next: null}}};
        const list2 = {val: 1, next: {val: 3, next: {val: 4, next: null}}};
        const mergedList = {val: 1, next: {val: 1, next: {val: 2, next: {val: 3, next: {val: 4, next: {val: 4, next: null}}}}}};
        expect(mergeTwoLists(list1, list2)).toEqual(mergedList);
    });
    test('[] + [] = []', () => {
        expect(mergeTwoLists(null, null)).toEqual(null);
    })
    test('[] + [0] = [0]', () => {
        expect(mergeTwoLists(null, {val: 0, next: null})).toEqual({val: 0, next: null});
    })
});