function solution(priorities, location) {
    var answer = 0;
    const arr = priorities.map((priority, index) => [priority, index])
    
    while(arr.length !== 0){
        const maxValue = Math.max(...priorities)
        const [priority, index] = arr.shift()
        
        if(priority >= maxValue) {
            answer++
            priorities[index] = 1
            if(index === location) break
        }else{
            arr.push([priority,index])
        }
        
    }
    
     
    return answer;
}