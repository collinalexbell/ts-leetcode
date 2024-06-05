function lengthOfLastWord(s: string): number {
    const words = s.split(" ");
    let i = 0;
    while(i < words.length) {
        const rv = words[words.length - 1 - i].length;
        if(rv > 0) {
            return rv;
        }
    }
    return 0;
};