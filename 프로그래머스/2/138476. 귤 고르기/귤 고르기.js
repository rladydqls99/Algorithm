function solution(k, tangerine) {
    var answer = 0;
    const objT = {}
    
    tangerine.forEach(t => {
        if (t in objT) {
            objT[t] += 1
        }  else {
            objT[t] = 1
        }
    })
    
    const arrT = Object.values(objT)
    arrT.sort((a,b) => b-a)
    
    for (let i=0; i<arrT.length; i++) {
         k -= arrT[i]
        answer += 1
        if (k <= 0)
            return answer
    }
}