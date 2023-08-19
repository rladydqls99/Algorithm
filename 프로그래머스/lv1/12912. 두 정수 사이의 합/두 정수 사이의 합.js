function solution(a, b) {
    var answer = 0;
    if(a===b){
        return a;
    } else if(a<b){
        while(a<=b){
            answer += a
            a++
        }
    }else{
        while(a>=b){
            answer += b
            b++
        }
    }
    
    return answer;
}