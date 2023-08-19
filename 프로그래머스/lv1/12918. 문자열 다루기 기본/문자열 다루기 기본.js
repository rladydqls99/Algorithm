function solution(s) {
    let arr = []
    if(s.length === 4 || s.length === 6){
        s = s.split("")
    
        s.forEach((element) =>{
            element = Number(element)
            if(!(isNaN(element))){
                arr.push(element)
            }
        })
        if(s.length === arr.length){
            return true
        }
    }
    
    return false;
}