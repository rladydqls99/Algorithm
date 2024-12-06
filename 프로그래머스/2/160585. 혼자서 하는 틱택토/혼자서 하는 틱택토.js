function solution(board) {
    let oCount = 0;
    let xCount = 0;

    // O와 X 개수 카운팅
    for (let row of board) {
        oCount += (row.match(/O/g) || []).length;
        xCount += (row.match(/X/g) || []).length;
    }

    // O와 X의 개수 검증
    if (oCount !== xCount && oCount !== xCount + 1) {
        return 0;
    }

    // 승리 조건 체크 함수
    const isWin = (player) => {
        // 가로, 세로, 대각선 체크
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true; // 가로
            if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true; // 세로
        }
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true; // 대각선
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true; // 대각선
        return false;
    };

    const oWin = isWin('O');
    const xWin = isWin('X');

    // 승리 상태 검증
    if (oWin && xWin) return 0; // 둘 다 승리 불가능
    if (oWin && oCount !== xCount + 1) return 0; // O 승리 시 O가 1개 더 많아야 함
    if (xWin && oCount !== xCount) return 0; // X 승리 시 O와 X 개수가 같아야 함

    // 모든 조건을 만족하면 올바른 상태
    return 1;
}
