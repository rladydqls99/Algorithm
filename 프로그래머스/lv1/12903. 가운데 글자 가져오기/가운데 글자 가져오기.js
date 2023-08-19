function solution(s) {
    var answer = '';
    var idx = s.length / 2
    if(Number.isInteger(idx) === true){
        answer = s[idx-1] + s[idx]
    }else{
        answer = s[Math.floor(idx)]
    }
    return answer;
}