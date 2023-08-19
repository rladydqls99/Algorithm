// 문자열 내림차순으로 배치하기
function solution(s) {
    var answer = '';
    // 이런식으로 한 번에 하는 것이 효율성이 높음
    answer = s.split('').sort().reverse().join("")
    
    return answer;
}