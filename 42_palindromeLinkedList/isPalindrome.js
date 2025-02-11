/*
Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}
*/

const isPalindrome = function(head) {
    const nums = [];
    while(head) {
        nums.push(head.val);
        head = head.next;
    }

    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
        if (nums[i] != nums[nums.length - 1 - i]) return false;
    }
    return true;
}

module.exports = isPalindrome;