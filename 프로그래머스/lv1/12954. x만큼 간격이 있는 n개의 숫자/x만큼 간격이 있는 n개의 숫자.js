// x만큼 간격이 있는 n개 길이의 배열 만들기
function solution(x, n) {
    var answer = [];
    var x1 = x
    for(let i=0; i<n; i++){
        answer.push(x1)
        // x를 그대로 += 하면 제곱으로 늘어나서 x1이라는 새로운 변수 생성
        x1 += x
    }
    return answer;
}