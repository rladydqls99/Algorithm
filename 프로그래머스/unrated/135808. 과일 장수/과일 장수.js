function solution(k, m, score) {
    var answer = 0;
    
    score = score.sort((comp1, comp2) => comp2 - comp1);
    
    score.forEach((ele, idx) => {
        if(idx % m === 0){
            const groupBox = score.slice(idx, idx+m)
            
            if(groupBox.length % m === 0){
                answer += Math.min(...groupBox) * m
            }
        }
        
    })
                      
    return answer;
}