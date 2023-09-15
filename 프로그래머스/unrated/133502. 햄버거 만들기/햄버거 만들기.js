function solution(ingredient) {
    var answer = 0;
    let stack = []
    
    ingredient.forEach((item)=>{
        stack.push(item)
        
        let stackLength = stack.length
        
        if(stack[stackLength-4] === 1 &&
           stack[stackLength-3] === 2 &&
           stack[stackLength-2] === 3 &&
           stack[stackLength-1] === 1){
            for(let i=0; i<4; i++){
                stack.pop()
            }
            answer++
        }
        
    })
    
    
    return answer;
}