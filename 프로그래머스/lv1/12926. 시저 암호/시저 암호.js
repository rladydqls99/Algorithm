function solution(s, n) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let newString = ""
    
    for(let i=0; i<s.length; i++){
        if(s[i] === " "){
            newString += " "
            continue 
        }
        let newText = upper.includes(s[i]) ? upper : lower
        let idx = newText.indexOf(s[i]) + n
        if(idx >= newText.length){
            idx -= newText.length
        }
        newString += newText[idx]
    }
    console.log(newString)
    return newString;
}