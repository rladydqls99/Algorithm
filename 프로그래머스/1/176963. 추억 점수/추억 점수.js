function solution(name, yearning, photo) {
    const answer = []
    const yearningObj = {}
    
    name.forEach((n, i) => {
        yearningObj[n] = yearning[i]
    })
    
    photo.forEach((names,i) => {
        let num = 0
        names.forEach(n => {
            if(yearningObj[n]) {
               num += yearningObj[n] 
            }
        })
        answer.push(num)
        num = 0
    })
    return answer;
}