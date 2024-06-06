function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const lastSeen: Map<number, number> = new Map();
    for(const [index, num] of nums.entries()) {
        if(index - (lastSeen.get(num) ?? -k-1) <= k) return true;
        lastSeen.set(num, index);
    }
    return false;
};