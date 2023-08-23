function solution(array, commands) {
    var answer = [];
    let newArr
    
    for(let i=0; i<commands.length; i++){
        newArr = array.slice(commands[i][0]-1, commands[i][1])
        newArr.sort(function(comp1, comp2){
                    return comp1 - comp2
                })
        let idx = commands[i][2] - 1
        answer.push(newArr[idx])
    }                
    return answer;
}