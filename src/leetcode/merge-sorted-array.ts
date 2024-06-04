function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const t = m + n;
    const toShift = t-m;
    for(let i = 0; i < m; i++) {
        nums1[t-i-1] = nums1[m-i-1];
    }
    /*
    t = 6
    i = 0;
    nums1 = [1,2,3,0,0,0]
    6-0-1 = 5
    nums[5] = nums[]
    */

    let indexM = n;
    let indexN = 0;
    for (let i = 0; i < t; i++) {
        if(indexM == t) {
            nums1[i] = nums2[indexN];
            indexN++;
        }
        else if (indexN == n) {
            nums1[i] = nums1[indexM];
            indexM++;
        } else {
            if (nums1[indexM] < nums2[indexN]) {
                nums1[i] = nums1[indexM];
                indexM++;
            } else {
                nums1[i] = nums2[indexN];
                indexN++;
            }
        }
    }
};