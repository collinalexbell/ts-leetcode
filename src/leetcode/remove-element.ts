// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

function removeElement(nums: number[], val: number): number {
    let removed = 0;
    nums.forEach((lookedAt, index) => {
        nums[index - removed] = lookedAt;
        if (val == lookedAt) {
            removed++;
        };
    });
    return nums.length - removed;
};


export default {
    removeElement, 
    run: () => {
        removeElement([0, 2, 3, 5, 2, 3, 6, 4, 3, 21, 6, 3, 2], 2);
    }
}
