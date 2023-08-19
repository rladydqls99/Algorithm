function solution(n, m) {
    var answer = [];
    let maxVal = Math.max(n, m)
    let minVal = Math.min(n, m)
    let rest = 0;
    let mL = 0;
    
    while(true){
        if(maxVal % minVal === 0){
            mL = (n*m) / minVal
            answer.push(minVal)
            answer.push(mL)
            
            return answer
            
        }else {
            rest = maxVal % minVal
            maxVal = minVal
            minVal = rest
        }
    }
}