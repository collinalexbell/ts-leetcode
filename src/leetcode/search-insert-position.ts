function searchInsert(nums: number[], target: number): number {
    const index = Math.floor(nums.length / 2)
    if(nums[index] == target) {
        return index;
    }
    if(index == 0) {
        return 0
    }
    if(nums[index] < target) {
        return searchInsert(nums.slice(0,index), target);
    } else {
        return index + searchInsert(nums.slice(index), target);
    }
};
