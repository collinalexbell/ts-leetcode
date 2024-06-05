function isPalindrome(s: string): boolean {
    s = s.toLocaleLowerCase();
    s = s.trim();
    s = s.replace(/[^a-z0-9]/gi, '');
    for(let i = 0; i < s.length/2; i++) {
        if(s[i] !== s[s.length-1-i]) {
            return false;
        }
    }
    return true;
};