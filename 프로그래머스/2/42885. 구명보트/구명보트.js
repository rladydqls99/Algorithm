function solution(people, limit) {
    var answer = 0;
    people = people.sort((a,b) => a-b)
    
    while(people.length !== 0) {
        const front = people[0]
        const back = people[people.length-1]
        
        if (front + back > limit) {
            people.pop()
            answer += 1
        } else {
            people.shift()
            people.pop()
            answer += 1
        }
    }
    return answer;
}