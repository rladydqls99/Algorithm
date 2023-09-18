function solution(survey, choices) {
    var answer = '';
    let type = {"R": 0,"T": 0,"C": 0,"F": 0,"J": 0,"M": 0,"A": 0,"N": 0,}
    let score = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3}
    
    for(let i=0; i<survey.length; i++){
       let [front, back]  = survey[i]
       if(choices[i]>=1 && choices[i]<=3){
           type[front] += score[choices[i]]
       }
       if(choices[i]>=5){
            type[back] += score[choices[i]]
       }
    }
    type["R"] >= type["T"] ? answer+="R" : answer+= "T"
    type["C"] >= type["F"] ? answer+="C" : answer+= "F"
    type["J"] >= type["M"] ? answer+="J" : answer+= "M"
    type["A"] >= type["N"] ? answer+="A" : answer+= "N"
    
    return answer;
}