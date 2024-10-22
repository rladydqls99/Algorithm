function solution(n) {
    var answer = 0;
    let binary = n.toString(2)
    let nextNum = n + 1
    
    const cnt = n.toString(2).match(/[1]/g).length

    while (true) {
        const binaryNextNum = nextNum.toString(2)
        if (cnt === binaryNextNum.match(/[1]/g).length) {
            return nextNum
        }
        nextNum += 1
    }
}