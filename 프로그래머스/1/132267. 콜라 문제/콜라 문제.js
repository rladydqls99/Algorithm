function solution(a, b, n) {
    var answer = 0;
    
    while (true) {
        if (n === Math.floor(n/a) || n < a) break

        // 나누지 못한 나머지
        let rest = n % a
        // 나누고 남은 개수
        n = Math.floor(n/a)
        answer += n*b
        n = (n*b) + rest
    }
    
    return answer;
}