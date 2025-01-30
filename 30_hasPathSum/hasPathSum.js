/*
Definition for a binary tree node
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

const hasPathSum = function(root, targetSum) {
    const find = (sum, node) => {
        if (!node) return false;
        sum += node.val;
        if (sum == targetSum) {
            const isLeaf = node.left == null && node.right == null;
            if (isLeaf) return true;
        };
        return find(sum, node.left) || find(sum, node.right);
    }
    return find(0, root);
}

module.exports = hasPathSum;