function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const isSymmetric = require('./isSymmetric');

describe('isSymmetric', () => {
    // Given the root of a binary tree, check whether it is a mirror of itself.
    test('root = [1, 2, 2] output = true', () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(2));

        expect(isSymmetric(root)).toBe(true);
    });
    test('root = [1, 2, 2, 3, 4, 4, 3] output = true', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));

        expect(isSymmetric(root)).toBe(true);
    });
    test('root = [1, 2, 2, null, 3, null, 3] output = false', () => {
        const root = new TreeNode(1, new TreeNode(2, null, 3), new TreeNode(2, null, 3));

        expect(isSymmetric(root)).toBe(false);
    });
});