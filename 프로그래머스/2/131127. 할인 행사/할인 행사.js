function solution(want, number, discount) {
    var answer = 0;
    const obj = {}
    
    want.forEach((w, i) => {
        obj[w] = number[i]
    })
    
    for (let i=0; i<discount.length; i++) {
        const newObj = {...obj}
        
        for (let j=i; j<10+i; j++) {
            if (discount[j] in newObj) {
                newObj[discount[j]] -= 1
            } 
        }
        let state = false
        Object.values(newObj).forEach(item => {
            if (item !== 0) {
                state = true
            }
        })
        if (state === false) {
            answer += 1
        }
    }
    return answer;
}