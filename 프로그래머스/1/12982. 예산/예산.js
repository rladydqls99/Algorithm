function solution(d, budget) {
    var answer = 0;
    // 1. 정렬
    d.sort((a,b)=> a-b)
    
    let arr = [10, 2, 2]
    let bud = 100
    let aa = 0
     arr.forEach(money => {
        bud -= money
        
        if (bud < 0) {
            return
        } else {
            aa += 1
        }
    })
    console.log(aa)
    // 2. 앞에서부터 빼기
    d.forEach(money => {
        budget -= money
        
        if (budget < 0) {
            return
        } else {
            answer += 1
        }
    })
    
    return answer;
}