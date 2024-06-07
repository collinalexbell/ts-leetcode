

function averageOfLevels(root: TreeNode | null): number[] {
    let levelCounts: Map<number, number> = new Map();
    let averages: number[] = []
    function averageOfLevels_(root: TreeNode | null, level: number): void {
        if(root == null) {
            return;
        }
        while(level >= averages.length) {
            averages.push(0);
        }
        levelCounts.set(level, (levelCounts.get(level) ?? 0) + 1);
        averages[level] += (root.val - averages[level]) / (levelCounts.get(level) ?? 1);
        averageOfLevels_(root.left, level+1);
        averageOfLevels_(root.right, level+1);
    }
    averageOfLevels_(root, 0);
    return averages;
};