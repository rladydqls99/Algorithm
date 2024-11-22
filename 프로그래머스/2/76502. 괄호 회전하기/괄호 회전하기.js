function solution(s) {
    let answer = 0;
    let obj = {"[" :"]", "{" : "}", "(": ")"}
    
    if (s.length % 2 !== 0 ) return answer
    
    for (let i=0; i<s.length; i++) {
        const stack = []
        for (let j = 0; j<s.length; j++) {
            stack.push(s[j])
            
            if (obj[stack[stack.length-2]] === stack[stack.length-1]) {
                stack.pop()
                stack.pop()
            }
        }
        if (stack.length === 0) answer += 1
        const newS = s[0]
        s = s.slice(1) + newS        
    }

    return answer;
}