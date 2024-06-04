function searchInsertInd(nums: number[], target: number, start: number, end: number) {
    if(start >= end-1) {
        return start;
    }

    const ind = (end-start)/2 + start;
    if(nums[ind] == target) {
        return ind;
    }
    if(nums[ind] < target) {
        return searchInsertInd(nums, target, start, ind);
    } else {
        return searchInsertInd(nums, target, ind, end);
    }
}

function searchInsert(nums: number[], target: number): number {
    return searchInsertInd(nums, target, 0, nums.length);
};
