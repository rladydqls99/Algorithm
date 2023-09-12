function solution(keymap, targets) {
    var answer = [];
    for(let i = 0; i < targets.length; i++){
        let sum = 0;
        let possible = true;

        for(let j = 0; j < targets[i].length; j++){
            let firstMin = 100;
            let found = false;
            
            for(let k = 0; k < keymap.length; k++){
                let min = keymap[k].indexOf(targets[i][j]);
                if(min !== -1){
                    firstMin = Math.min(firstMin, min + 1);
                    found = true;
                }
            }

            if (!found) {
                possible = false;
                break;
            }
            
            sum += firstMin;
        }

        answer.push(possible ? sum : -1);
    }
    
    return answer;
}
