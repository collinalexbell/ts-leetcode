function twoSum(nums: number[], target: number): number[] {
    const seen: Map<number, number> = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(seen.has(target-nums[i])) {
            return [seen.get(target - nums[i]) ?? 0, i];
        } else {
            seen.set(nums[i], i);
        }
    }
    return [-1,-1]; // should never happen
};

/*
Failure #1

nums = [3,2,4]
target = 6
Output [0,2]
Expected [1,2]
*/