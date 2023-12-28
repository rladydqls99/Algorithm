function solution(progresses, speeds) {
    var answer = [];
 
    let done = progresses.map((day, index) => Math.ceil((100-day) / speeds[index]))
 
    let first = done[0]
    let count = 0
    done.forEach((day,index) => {
        if(first >= day){
            count++
        }else{
            first = day
            answer.push(count)
            count = 1
        }
    })
    if(count){
        answer.push(count)
    }
    return answer;
}