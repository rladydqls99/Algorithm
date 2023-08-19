function solution(arr, divisor) {
    var answer = [];
    
    answer = arr.filter(num => num%divisor ===0)
    answer = answer.sort(function(comp1, comp2){
        return comp1 - comp2
    })
    if(answer.length === 0){
        answer.push(-1)
    }

    return answer;
}