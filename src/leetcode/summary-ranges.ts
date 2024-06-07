function summaryRanges(nums: number[]): string[] {
    let start: number | undefined = undefined;
    let last: number | undefined = undefined;
    let ranges: string[] = []
    nums.push(Number.MIN_SAFE_INTEGER);

    nums.forEach((num) => {
        if(start == undefined) {
            start = num;
            last = num;
            return;
        }

        if(last != undefined && last+1 != num) {
            start != last ?
                ranges.push(`${start}->${last}`):
                ranges.push(`${start}`);
            start = num;
        }
        last = num;
    });
    return ranges;
};