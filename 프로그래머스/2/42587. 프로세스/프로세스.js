function solution(priorities, location) {
    var answer = 0;
    const queue = priorities.map((priority, index) => [priority, index])
    
    while(queue.length !== 0){
        const maxValue = Math.max(...priorities)
        const [priority, index] = queue.shift()
        
        if(priority >= maxValue) {
            answer++
            priorities[index] = 1
            if(index === location) break
        }else{
            queue.push([priority,index])
        }
        
    }
    
     
    return answer;
}