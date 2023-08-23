function solution(strings, n) {
    var answer = [];
    let newStrings = []
    
    newStrings = strings.map((fixed) => fixed[n] + fixed).sort()
    answer = newStrings.map((fixed) => fixed.substr(1))

    return answer;
}