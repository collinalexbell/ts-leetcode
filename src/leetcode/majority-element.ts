function majorityElement(nums: number[]): number {
    let counts :{[key:string]: number} = {};
    let rv: number = -1;
    nums.forEach((num) => {
        const key = num.toString();
        if(counts[key] == undefined) {
            counts[key] = 0;
        }
        counts[key]++;
        if(counts[key] > nums.length/2) {
            rv = num;
        }
    });
    return rv;
};