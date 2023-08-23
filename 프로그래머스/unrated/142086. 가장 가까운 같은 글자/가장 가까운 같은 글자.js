function solution(s) {
    var answer = [-1];

    for(let i = 1; i < s.length; i++){
        let nearest = -1;  // Default value
        for(let j = i - 1; j >= 0; j--) {
            if (s[j] === s[i]) {
                nearest = j;  // Found a preceding occurrence
                break;  // Stop looking once we find the nearest
            }
        }

        if(nearest !== -1) {
            answer.push(i - nearest);
        } else {
            answer.push(-1);
        }
    }

    return answer;
}
