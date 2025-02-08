function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const isSameTree = require('./isSameTree');

describe('isSameTree', () => {
    // Given the roots of two binary trees p and q, write a function to check if they are the same or not.
    // Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
    test('p = [1, 2, 3] q = [1, 2, 3] output = true', () => {
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

        expect(isSameTree(p, q)).toBe(true);
    });
    test('p = [1, 2] q = [1, null, 2] output = false', () => {
        const p = new TreeNode(1, new TreeNode(2));
        const q = new TreeNode(1, null, new TreeNode(2));

        expect(isSameTree(p, q)).toBe(false);
    });
    test('p = [10, 5, 15] q = [10, 5, null, null, 15] output = false', () => {
        const p = new TreeNode(10, new TreeNode(5), new TreeNode(15));
        const q = new TreeNode(10, new TreeNode(5, null, new TreeNode(15)));

        expect(isSameTree(p, q)).toBe(false);
    });
});