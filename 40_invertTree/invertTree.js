/*
Definition for a binary tree node
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

const invertTree = function(root) {
    const invert = (node) => {
        if (node) {
            [node.left, node.right] = [node.right, node.left];
        } else return;

        invert(node.left);
        invert(node.right);
    };
    invert(root);

    return root;
}

module.exports = invertTree;