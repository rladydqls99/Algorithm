function solution(answers) {
    var answer = [];
    let people1 = [1,2,3,4,5] 
    let people2 = [2,1,2,3,2,4,2,5]
    let people3 = [3,3,1,1,2,2,4,4,5,5]
    let score1 = 0
    let score2 = 0
    let score3 = 0
    
    for(let i=0; i<answers.length; i++){
        if(people1[i%people1.length] == answers[i]){
            score1 += 1
        }
        if(people2[i%people2.length] == answers[i]){
            score2 += 1
        }
        if(people3[i%people3.length] == answers[i]){
            score3 += 1
        }
    }
    let max = Math.max(score1, score2, score3)
    if(max === score1){
        answer.push(1)
    }
    if(max === score2){
        answer.push(2)
    }
    if(max === score3){
        answer.push(3)
    }
    return answer;
}