function solution(number) {
    var answer = 0;
    for(let i=0; i<number.length; i++){
        let fixed = number[i]
        
        for(let j=i+1; j<number.length; j++){
            let second = number[j]
    
            for(let k=j+1; k<number.length; k++){
                let last = number[k]
                if(fixed+second+last === 0){
                    answer +=1
                }
            }
        }
    }
    return answer;
}