function solution(s){
    var answer = true;
    let stack = []
    
    for(let i=0; i<s.length; i++){
        if(s[i]=== '(' && s[i+1] === ')'){
            i++
        }else {
            stack.push(s[i])
            if(stack[stack.length-2] === '(' && stack[stack.length-1] === ')'){
                stack.pop()
                stack.pop()
            }
        }
    }
    if(stack[0] === '(' && stack[1] === ')'){
       stack = []
    }
    if(stack.length){
        return false
    }

    return answer;
}