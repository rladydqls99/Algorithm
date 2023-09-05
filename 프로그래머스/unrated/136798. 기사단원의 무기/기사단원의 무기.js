// 1. number를 돌면서 각각의 약수 개수 구하기
// 2. 약수 개수가 limit보다 클 경우 공격력 = power
// 3. 다 더해서 출력
function solution(number, limit, power) {
    var answer = 0;
    for(let i=1; i<=number; i++){
        let divisor = 0;
        for(let j=1; j*j<=i; j++){
            if(j*j === i ){
                divisor +=1
            }else if(i % j === 0){
                divisor += 2
            }
        }
        if(divisor > limit) {
            answer += power
        }else{
            answer += divisor
        }
    }
    return answer;
}
