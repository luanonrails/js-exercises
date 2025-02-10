/*
Definition for a binary tree node
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

const isSymmetric = function(root) {
    const isEqual = function(p, q) {
        if (p && q) {
            if (p.val != q.val) return false;
            return isEqual(p.left, q.right) && isEqual(p.right, q.left);
        } else return p == q;
    }
    return isEqual(root.left, root.right);
}

module.exports = isSymmetric;