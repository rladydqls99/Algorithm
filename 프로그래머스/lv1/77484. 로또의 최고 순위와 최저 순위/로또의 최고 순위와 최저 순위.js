function solution(lottos, win_nums) {
    var answer = [];
    lottos = lottos.sort((a,b)=> b-a )
    
    let cnt = 0
    let zeroCnt = 0
    lottos.forEach((item) => {
        if(win_nums.includes(item)) {
           cnt++
        }else if(item ===0){
            zeroCnt++
        }
    })
    switch(cnt + zeroCnt){
        case 6:
            answer.push(1)
            break
        case 5:
        answer.push(2)
            break
        case 4:
        answer.push(3)
            break
        case 3:
        answer.push(4)
            break
        case 2:
        answer.push(5)
            break
        default:
            answer.push(6) 
    }
    
    switch(cnt){
        case 6:
            answer.push(1)
            break
        case 5:
        answer.push(2)
            break
        case 4:
        answer.push(3)
            break
        case 3:
        answer.push(4)
            break
        case 2:
        answer.push(5)
            break
        default:
            answer.push(6) 
    }
    return answer;
}