function solution(n) {
    var answer = '';
    var w = "수박"
    for(let i=0; i<n/2; i++){
        answer += w  
    }
    if(n%2 !==0){
        answer = answer.slice(0, -1)
    }
    return answer;
}