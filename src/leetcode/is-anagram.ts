function isAnagram(s: string, t: string): boolean {
    const sMap: Map<string, number> = new Map();
    const tMap: Map<string, number> = new Map();

    if(s.length != t.length) return false;

    for(let i = 0; i < s.length; i++) {
        sMap.set(s[i], sMap.get(s[i]) ?? 0 + 1);
        tMap.set(t[i], tMap.get(t[i]) ?? 0 + 1);
    }

    for(const entry of sMap.entries()) {
        if(entry[1] != tMap.get(entry[0])) return false;
    }
    return true;
};