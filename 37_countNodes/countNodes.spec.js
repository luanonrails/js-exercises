function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const countNodes = require('./countNodes');

describe('countNodes', () => {
    // Given the root of a complete binary tree, return the number of the nodes in the tree.
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6)));
    
    test('root = [1, 2, 3, 4, 5, 6] output = 6', () => {
        expect(countNodes(root)).toBe(6);
    });
    test('root = [] output = 0', () => {
        expect(countNodes(null)).toBe(0);
    });
    test('root = [1] output = 1', () => {
        expect(countNodes(new TreeNode(1))).toBe(1);
    });
});