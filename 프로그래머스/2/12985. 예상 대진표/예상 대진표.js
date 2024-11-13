function solution(n,a,b) {
    let answer = 1;
    let position = a < b

    for (let i=0; i<n; i++) {
        if (position) {
            if (a+1 === b && a%2 === 1) {
                return answer
            }
        } else {
            if (a === b+1 && b%2 === 1) {
                return answer
            }
        }
        a = a%2 === 0 ? a/2 : ((a-1)/2) + 1
        b = b%2 === 0 ? b/2 : ((b-1)/2) + 1
        answer += 1
    }

    return answer;
}