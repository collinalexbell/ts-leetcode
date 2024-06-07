const match: {[key: string]: string} = {
    "}": "{",
    ")": "(",
    "]": "["
}
function isValid(s: string): boolean {
    let opened: string[] = [];
    let openChars = ["{", "(", "["];
    for (const c of s) {
        if(openChars.includes(c)) {
            opened.push(c);
        } else {
            if (opened.length == 0 || opened.pop() != match[c]) {
                return false;
            }
        }
    }
    if(opened.length > 0) return false;
    return true;
};