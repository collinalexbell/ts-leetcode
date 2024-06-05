function isSubsequence(s: string, t: string): boolean {
    for(const c of s) {
        const index = t.indexOf(c);
        if(index < 0) {
            return false;
        }
        if(t.length > index+1) {
            t = t.substring(index+1)
        } else {
            t = ""
        }
    }
    return true;
};