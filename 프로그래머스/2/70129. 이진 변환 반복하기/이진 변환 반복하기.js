function solution(s) {
    let attempt = 0
    let deleteCount = 0
    
    while (s !== "1") {
        let newS = s.replaceAll('0', '')
        let deletedZero = s.length - newS.length
        
        deleteCount += deletedZero
        attempt += 1
        
        s = newS.length.toString(2)
    }
    return [attempt, deleteCount];
}