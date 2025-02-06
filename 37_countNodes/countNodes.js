/*
Definition for a binary tree node
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

const countNodes = function(root) {
    let total = 0;
    const count = (node) => {
        if (node) total++;
        else return;
        count(node.left);
        count(node.right);
    }
    count(root);
    return total;
}

module.exports = countNodes;