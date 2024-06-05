function isIsomorphic(s: string, t: string): boolean {
    const cipher: {[key: string]: string} = {};
    const mapped: {[key: string]: boolean} = {}
    if(s.length != t.length) return false;
    for(let i = 0; i<s.length; i++) {

        let mapping = cipher[s[i]];
        if(!mapping && !mapped[t[i]]) {
            cipher[s[i]] = mapping = t[i];
            mapped[t[i]] = true;
        }
        
        if(t[i] != mapping) {
            return false;
        }
    }
    return true;
};