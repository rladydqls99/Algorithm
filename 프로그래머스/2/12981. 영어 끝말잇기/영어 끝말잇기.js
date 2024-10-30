function solution(n, words) {
    let people = 0
    let turn = 1
    let arr = []
    
    for (let i=0; i<words.length; i++) {
        n === people ? turn +=1 : null
        people < n ? people += 1 : people = 1
        
        if (arr.length !== 0) {
            const lastW = arr[arr.length-1]
            const lastC = lastW[lastW.length-1]
            const word = words[i]
            const wordC = word[0]
            
            if (lastC !== wordC) {
                return [people, turn]
            }
        }
        
        
        if(arr.includes(words[i])) {
            return [people, turn]
        }
        arr.push(words[i])
    }
    
    return [0,0]
}