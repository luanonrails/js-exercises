/*
Definition for a binary tree node
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

const minDepth = function(root) {
    let min;
    const find = (index, node) => {
        if (!node) return;
        if (index > min) return;
        if (!node.left && !node.right) min = index;

        find(index + 1, node.left);
        find(index + 1, node.right);
    }
    find(1, root);
    return min || 0;
}

module.exports = minDepth;