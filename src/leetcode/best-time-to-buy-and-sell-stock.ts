function maxProfit(prices: number[]): number {
    const dailyProfit = [];
    for(let i = 1; i < prices.length; i++) {
        dailyProfit.push(prices[i] - prices[i-1]);
    }
    let max = 0;
    let curProfit = 0;
    dailyProfit.forEach(todayProfit => {
        curProfit += todayProfit
        if(curProfit < 0) {
            curProfit = 0;
        }
        if(curProfit > max) {
            curProfit = max;
        }
    })
    return max;
}