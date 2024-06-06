function longestCommonPrefix(strs: string[]): string {
    let rv = strs[0];
    for(let i = 1; i < strs.length; i++) {
        let similarCount = 0;
        for(let j = 0; j < strs[i].length; j++) {
            if (strs[i].charAt(j) == rv[j]) {
                similarCount++;
            } else {
                break;
            }
        }
        rv = rv.slice(0, similarCount);
    }
    return rv;
};