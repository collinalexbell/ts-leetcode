const romans: {[key: string]: number} = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

function romanToInt(s: string): number {
    let rv = 0;
    let last = 0;
    for(const c of s) {
        if(romans[c] > last) {
            rv -= last * 2; // first for erronous add, second for actual subtraction
        }
        rv += romans[c];
        last = romans[c];
    }
    return rv;
};