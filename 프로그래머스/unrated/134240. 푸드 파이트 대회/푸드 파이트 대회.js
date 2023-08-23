function solution(food) {
    var answer = '';
    let total = []
    let front = []
    let back = []
    for(let i=1; i<food.length; i++){
        total.push(food[i] % 2 !==0 ? (food[i] - 1)/2 : (food[i]/2))
    }
    
    for(let j=0; j<total.length; j++){
        let cnt = j+1 + "";
        if(total[j] === 0){
            continue
        }else{
            front.push(cnt.repeat(total[j]))
        }
    }
    let newFront = front.join('')
    back = front.reverse()
    let newBack = back.join('')
    answer = newFront + '0' + newBack
    return answer;
}