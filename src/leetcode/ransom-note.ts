function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineHash: {[key: string]: number} = {};

    for(const c of magazine) {
        if(magazineHash[c]) {
            magazineHash[c] += 1;
        } else {
            magazineHash[c] = 1;
        }
    }

    for (const c of ransomNote) {
        const count = magazineHash[c]
        if(!count || count <= 0) {
            return false;
        }
        magazineHash[c]--;
    }
    return true;
};