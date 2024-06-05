function wordPattern(pattern: string, s: string): boolean {
    const mapping: {[key: string]: string} = {}   
    const isMapped: {[key: string]: boolean} = {};
    s = s.trim();
    const words = s.split(" ");
    if(words.length != pattern.length) return false;
    for(let i = 0; i < words.length; i++) {
        if(!mapping[pattern[i]] && !isMapped["_"+words[i]]) {
            mapping[pattern[i]] = words[i];
            isMapped["_"+words[i]] = true;
        }
        if(mapping[pattern[i]] != words[i]) {
            return false;
        }
    }
    return true;
};