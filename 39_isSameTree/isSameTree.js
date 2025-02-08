/*
Definition for a binary tree node
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
*/

const isSameTree = function(p, q) {
    const isSame = (a, b) => {
        if (a && b) {
            if (a.val != b.val) return false;
            return isSame(a.left, b.left) && isSame(a.right, b.right);
        } else {
            if (a != b) return false;
            else return true;
        }
    }

    return isSame(p, q);
}

module.exports = isSameTree;