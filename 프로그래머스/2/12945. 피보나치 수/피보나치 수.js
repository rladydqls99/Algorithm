function solution(n) {
    let before = 0
    let after = 1
    
    for (let i=1; i<n; i++) {
        let a = 0
        
        a = after
        after = (before + after) % 1234567
        before = a 
    }
    
    return after
}
