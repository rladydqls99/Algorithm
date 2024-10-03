function solution(board, moves) {
    var answer = 0;
    const stack = []
    
    moves.forEach(row => {
        for(let col=0; col<board.length; col++) {
            if (board[col][row-1] !== 0) {
                stack.push(board[col][row-1])
                board[col][row-1] = 0
                if (stack[stack.length-1] === stack[stack.length-2]) {
                    answer += 2
                    stack.pop()
                    stack.pop()
                }
                break
            }
        }
    })
    return answer;
}