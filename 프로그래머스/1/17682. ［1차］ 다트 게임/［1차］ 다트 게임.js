function solution(dartResult) {
    const totalScore = [];
    const bonusObj = { S: 1, D: 2, T: 3 };
    const optionObj = { '*': 2, '#': -1 };
    let score = '', bonus = '', option = '';
    
    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) {
            score += dartResult[i];
        }

        else if (dartResult[i] in bonusObj) {
            const _score = parseInt(score);
            const _bonus = bonusObj[dartResult[i]];
            let _option = 1;
            
            if (dartResult[i + 1] in optionObj) {
                _option = optionObj[dartResult[++i]];
            }

            let currentScore = _score ** _bonus * _option;

            if (_option === 2 && totalScore.length > 0) {
                totalScore[totalScore.length - 1] *= 2;
            }
            
            totalScore.push(currentScore);
            score = ''; 
        }
    }
    
    const answer = totalScore.reduce((acc, cur) => acc + cur, 0);
    return answer;
}
