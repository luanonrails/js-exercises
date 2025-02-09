function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const invertTree = require('./invertTree');

describe('invertTree', () => {
    // Given the root of a binary tree, invert the tree, and return its root.
    test('root = [4, 2, 7, 1, 3, 6, 9] Output: [4, 7, 2, 9, 6, 3, 1]', () => {
        const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
        const output = new TreeNode(4, new TreeNode(7, new TreeNode(9), new TreeNode(6)), new TreeNode(2, new TreeNode(3), new TreeNode(1)));

        expect(invertTree(root)).toEqual(output);
    });
    test('root = [2, 1, 3] Output: [2, 3, 1]', () => {
        const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        const output = new TreeNode(2, new TreeNode(3), new TreeNode(1));

        expect(invertTree(root)).toEqual(output);
    });
    test('root = [] Output: []', () => {
        expect(invertTree(null)).toEqual(null);
    });
});