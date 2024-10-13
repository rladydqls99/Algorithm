function solution(numbers, hand) {
    var answer = '';
    const position = {1: [0,0], 2: [0,1], 3: [0,2],4: [1,0], 5: [1,1], 6: [1,2], 7: [2,0], 8: [2,1], 9: [2,2], "*": [3,0], 0: [3,1], '#': [3,2]}
    
    let startL = [3,0]
    let startR = [3,2]
    
    for (let i=0; i<numbers.length; i++) {
        const num = numbers[i]
        let [r, c] = position[num]
        
        const distanceL = Math.abs(startL[0] - r) + Math.abs(startL[1] - c)
        const distanceR = Math.abs(startR[0] - r) + Math.abs(startR[1] - c)
        
        if (num === 1 || num === 4 || num === 7) {
            startL = position[num]
            answer += 'L'
            continue
        }
        if (num === 3 || num === 6 || num === 9) {
            startR = position[num]
            answer += 'R'
            continue
        }
        if (hand === 'left') {
            if (distanceL <= distanceR) {
                startL = position[num]
                answer += 'L'
            } else {
                startR = position[num]
                answer += 'R'
            }
        } else {
            if (distanceL < distanceR) {
                startL = position[num]
                answer += 'L'
            } else {
                startR = position[num]
                answer += 'R'
            }
        }
    }
    
    return answer;
}