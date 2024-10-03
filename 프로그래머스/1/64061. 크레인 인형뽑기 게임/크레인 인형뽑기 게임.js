function solution(board, moves) {
    var answer = 0;
    const stack = []
    
    moves.forEach(row => {
        for(let col=0; col<board.length; col++) {
            if (board[col][row-1] !== 0) {
                if (stack[stack.length-1] === board[col][row-1]) {
                    answer += 2
                    stack.pop()
                } else {
                    stack.push(board[col][row-1])
                }
                board[col][row-1] = 0
                break
            }
        }
    })
    return answer;
}