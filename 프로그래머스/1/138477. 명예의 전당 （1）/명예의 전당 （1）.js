function solution(k, score) {
    const answer = [];
    const honorList = [] 
    
    // 1. k까지 push(for문 한 바퀴 돌 때마다 arr[-1] answer에 push)
    score.forEach(s => {
        if (k > honorList.length) {
            honorList.push(s)
        } else {
            // 2. k === arr.length 일때 마지막거랑 비교후 교체
            if (honorList[honorList.length -1] < s) {
                honorList[honorList.length -1] = s     
            }
        }
        honorList.sort((a,b) => b-a)
        answer.push(honorList[honorList.length -1])
    })

    return answer;
}