function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const minDepth = require('./minDepth');

describe('minDepth', () => {
    // Given a binary tree, find its minimum depth
    // The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node
    test('root = [3, 9, 20, null, null, 15, 7] min = 2', () => {
        const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
        expect(minDepth(root)).toBe(2);
    });
    test('root = [2, null, 3, null, 4, null, 5, null, 6] min = 5', () => {
        const root = new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))));
        expect(minDepth(root)).toBe(5);
    });
    test('root = [] min = 0', () => {
        expect(minDepth(null)).toBe(0);
    });
})