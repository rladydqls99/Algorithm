function solution(N, stages) {
    var answer = [];
    const obj = {}
    
    for(let i=0; i<stages.length; i++){
        if (stages[i] in obj) {
            obj[stages[i]] += 1
        } else {
            obj[stages[i]] = 1
        }
    }
    
    let totalCnt = stages.length
    for (let i=1; i<=N; i++){
        let successCnt = 0
        if (obj[`${i}`]) {
            successCnt = obj[`${i}`]
        }
        answer.push([i, successCnt/totalCnt])
        totalCnt -= successCnt
    }
    
    answer = answer.sort((a,b) => b[1] - a[1])
  
    return answer.map(a => a[0]);
}