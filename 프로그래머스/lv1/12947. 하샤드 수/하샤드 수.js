// 하샤드 수
function solution(x) {
    var answer = true;
    let strX = String(x)
    let sum = 0
    // x의 길이만큼 반복 후 sum에 각각의 합 더하기
    for(let i=0; i<strX.length; i++){
        sum += Number(strX[i])
    }
    // 나머지가 0이 아니면 false 출력
    if(x % sum !== 0){
        answer = false
    }
    return answer;
}