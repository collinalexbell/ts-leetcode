// https://leetcode.com/problems/symmetric-tree
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function isSymmetricSide(left?: TreeNode | null, right?: TreeNode | null): boolean {
    if(!left && !right) {
        return true;
    }
    if(left && right && left.val == right.val) {
        return isSymmetricSide(left?.left, right?.right) && isSymmetricSide(left?.right, right?.left);
    }
    return false;
}

function isSymmetric(root: TreeNode | null): boolean {
    return isSymmetricSide(root?.left, root?.right);
};

export { };