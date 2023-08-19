function solution(left, right) {
    var answer = 0;

    for(let num=left; num<=right; num++){
        if(Math.sqrt(num) % 1 === 0) {
            answer -= num;
        } else {
            answer += num;
        }
    }

    return answer;
}