function solution(price, money, count) {
    var answer = 0;
    var lack = 0;
    for(let i=1; i<count+1; i++){
        lack += (price * i)
    }
    
    answer = lack - money
    
    if(answer > 0){
        return answer
    }else{
        return 0
    }
}