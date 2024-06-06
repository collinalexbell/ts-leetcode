
function getHappyStep(n: number): number {
    const s = n.toString()
    let sum = 0;
    for(const c of s) {
        sum += Number(c);
    }
    return sum;
}

function isHappy(n: number): boolean {
    const seen: Set<number> = new Set();
    while(n != 1) {
        if(seen.has(n)) return false;
        seen.add(n);
        n = getHappyStep(n);
    }
    return true;
};