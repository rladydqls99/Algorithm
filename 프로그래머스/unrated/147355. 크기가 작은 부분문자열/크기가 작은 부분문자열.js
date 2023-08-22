function solution(t, p) {
    var answer = 0;
    for(let i=0; i<t.length; i++){
        let num = ""
        for(let j=0; j<p.length; j++){   
            num += t[j+i]
        }
        if(num.length === p.length && Number(num)<=Number(p)){
            answer +=1
        }
        console.log(num)
    }
        
    return answer;
}