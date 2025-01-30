function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const hasPathSum = require('./hasPathSum');

describe('hasPathSum', () => {
    // Given the root of a binary tree and an integer targetSum
    // return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum
    const root = new TreeNode(5, new TreeNode(7, null, new TreeNode(2)), new TreeNode(-9));
    
    test('5 + 7 + 2 = 14', () => {
        expect(hasPathSum(root, 14)).toBe(true);
    });
    test('there is no root-to-leaf path with sum = 12', () => {
        expect(hasPathSum(root, 12)).toBe(false);
    });
    test('there are no root-to-leaf paths', () => {
        expect(hasPathSum(null, 0)).toBe(false);
    });
    test('works with negative target', () => {
        expect(hasPathSum(root, -4)).toBe(true);
    });
})