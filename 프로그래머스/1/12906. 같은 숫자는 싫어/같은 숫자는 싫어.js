function solution(arr) {
    var answer = [];
    let before= arr[0]
    answer.push(arr[0])
    for(let i=1; i<arr.length; i++){
        if(before === arr[i]){
            before = arr[i]
        }else{
            answer.push(arr[i])
            before = arr[i]
        }
    }
    
    return answer;
}