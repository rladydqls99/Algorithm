function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    let minCount = lottos.filter(item => win_nums.includes((item))).length
    let zeroCount = lottos.filter(item => item ===0).length

    return [rank[minCount+zeroCount], rank[minCount]];
}