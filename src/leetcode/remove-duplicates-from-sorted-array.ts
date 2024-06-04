function removeDuplicates(nums: number[]): number {
    let destIndex = 0;
    let largestSeen = Number.MIN_SAFE_INTEGER;

    nums.forEach((val, index) => {
        if(val > largestSeen) {
            nums[destIndex++] = val;
            largestSeen = val;
        }
    });
    return destIndex;
};